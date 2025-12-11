import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import Certified from "@/components/home/certified";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import MedicalTourismJourney from "@/components/home/medical-tourism-journey";
import MeetWithEmma from "@/components/home/meet-with-emma";
import Steps from "@/components/home/steps";
import Travel from "@/components/home/travel";
import React from "react";

export default function Home() {
  return (
    // <main style={{ padding: 24 }}>
    //   <h1 className="text-red-300">Emma Backend (Next.js)</h1>
    //   <p>
    //     Go to <a href="/verify">/verify</a> to start Veriff.
    //   </p>
    // </main>
    <>
      <Navbar />
      <Hero />
      <MeetWithEmma />
      <Certified />
      <Features />
      <Travel />
      <Steps />
      <MedicalTourismJourney />
      <Footer />
    </>
  );
}
