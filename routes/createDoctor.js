// routes/createDoctor.js
const express = require('express');
const supabase = require('../utils/supabaseClient');
const verifyCedula = require('../utils/verifyCedula');
const verifyCertification = require('../utils/verifyCertification');

const router = express.Router();

router.post("/", async (req, res) => {
  const {
    email,
    password,
    full_name,
    cedula,
    specialty,
    fallback_url // optional
  } = req.body;

  let userId = null;

  try {
    // Step 1: Verify cédula
    const cedulaResult = await verifyCedula(cedula);
    if (!cedulaResult.verified) {
      return res.status(400).json({ error: "Invalid cédula profesional" });
    }

    // Step 2: Verify certification
    const certResult = await verifyCertification(full_name);
    const certified = certResult.verified;
    const manualReview = !certified && !!fallback_url;

    // Step 3: Create user in Supabase Auth
    const { data: userData, error: userErr } = await supabase.auth.admin.createUser({
      email,
      password,
      user_metadata: { role: "doctor" },
    });

    if (userErr) throw new Error(userErr.message);
    userId = userData.user.id;

    // Step 4: Insert into doctors table
    const { data: doctorData, error: doctorErr } = await supabase
      .from("doctors")
      .insert({
        user_id: userId,
        full_name,
        specialty,
        cedula,
        cert_body: certResult.certification_body,
        certified,
        certification_fallback_url: fallback_url || null,
        cedula_verified: true,
        manual_review_required: manualReview,
      })
      .select()
      .single();

    if (doctorErr) {
      await supabase.auth.admin.deleteUser(userId); // Rollback Auth user
      throw new Error(doctorErr.message);
    }

    // ✅ Step 5: Insert into users table (custom app logic)
    const { error: usersErr } = await supabase.from("users").insert({
      auth_user_id: userId,
      doctor_id: doctorData.id,
      email,
      name: full_name,
      credits_available: 0,
      total_leads_received: 0,
    });

    if (usersErr) {
      await supabase.from("doctors").delete().eq("id", doctorData.id);
      await supabase.auth.admin.deleteUser(userId);
      throw new Error("App user creation failed: " + usersErr.message);
    }

    // Step 6: Insert verification metadata
    await supabase.from("cedula_verifications").insert({
      doctor_id: doctorData.id,
      cedula,
      full_name: cedulaResult.name,
      institution: cedulaResult.institution,
      year: cedulaResult.year,
      verified: true,
    });

    await supabase.from("certification_validations").insert({
      doctor_id: doctorData.id,
      specialty,
      certification_body: certResult.certification_body,
      full_name: certResult.full_name || full_name,
      certified,
      fallback_url: fallback_url || null,
    });

    return res.json({
      success: true,
      doctor: doctorData,
      verification: {
        cedula: cedulaResult,
        certification: certResult,
      },
    });

  } catch (err) {
    console.error("Error creating doctor:", err.message);
    if (userId) await supabase.auth.admin.deleteUser(userId);
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;