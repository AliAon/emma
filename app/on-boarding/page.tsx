"use client";
import React, { useState } from "react";
import Image from "next/image";
import Loading from "@/components/common/loading";
import StepOne from "@/components/common/ob-board/step-one";
import StepThree from "@/components/common/ob-board/step-three";
import StepTwo from "@/components/common/ob-board/step-two";
import StepFour from "@/components/common/ob-board/step-four";
import StepFive from "@/components/common/ob-board/step-five";
import StepSix from "@/components/common/ob-board/step-six";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useCreateProfileMutation } from "@/services/profileApi";

const validationSchema = Yup.object({
  user_id: Yup.string().required("User is required"),

  whatsapp_no: Yup.string()
    .required("WhatsApp number is required")
    .min(7, "Too short")
    .max(15, "Too long"),

  countryDial: Yup.string().required("Country code is required"),

  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]+$/, "Only numbers are allowed")
    .min(7, "Too short")
    .max(15, "Too long"),

  city: Yup.string().required("City is required"),

  country: Yup.string().required("Country is required"),

  speciality: Yup.string().required("Speciality is required"),

  professional_id: Yup.string().required("Professional ID is required"),
});

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [country, setCountry] = useState("");
  const user = useSelector((state: any) => state.auth.user);
  const [CreateProfile, { isLoading }] = useCreateProfileMutation();
  const router = useRouter();

  const totalSteps = 6;

  const handleNextFromStepFive = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(5);
    }, 2000);
  };

  const steps = [
    {
      name: "Whatsapp Number",
      component: <StepOne setStep={setStep} total={totalSteps} />,
    },
    {
      name: "Country",
      component: <StepThree setStep={setStep} total={totalSteps} />,
    },
    {
      name: "City",
      component: <StepTwo setStep={setStep} total={totalSteps} />,
    },
    {
      name: "Specialty",
      component: <StepFour setStep={setStep} total={totalSteps} />,
    },
    {
      name: "Professional ID",
      component: (
        <StepFive
          setStep={setStep}
          total={totalSteps}
          handleNext={handleNextFromStepFive}
        />
      ),
    },
    {
      name: "Verification",
      component: (
        <StepSix setStep={setStep} total={totalSteps} isLoading={isLoading} />
      ),
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <Loading text="Verifying your Credentials" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 grid lg:grid-cols-12">
      {step === 5 ? (
        <div className="block col-span-3 bg-[#8A38F5] text-white p-10">
          <Image
            src="/assets/svg/Emma-logo-white.svg"
            alt="Emma Logo"
            width={100}
            height={50}
          />
          <div className="lg:flex flex-col justify-center h-full mt-10 lg:mt-0">
            <h2 className="font-bold text-[25px] lg:text-[26px] text-white">
              {`You’re one step closer!`}
            </h2>
          </div>
        </div>
      ) : (
        <div className="block lg:col-span-3 bg-[#8A38F5] text-white p-10">
          <Image
            src="/assets/svg/Emma-logo-white.svg"
            alt="Emma Logo"
            width={100}
            height={50}
          />
          <div className="lg:flex flex-col justify-center h-full mt-10 lg:mt-0">
            <ul className="space-y-4 lg:space-y-8 text-lg">
              {steps.slice(0, 5).map((s, index) => (
                <li
                  key={index}
                  className={`transition-all duration-300 ${
                    step === index
                      ? "font-bold text-[25px] lg:text-[26px] text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {s.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className="lg:col-span-9 lg:max-w-lg mx-auto lg:flex lg:items-center lg:justify-center py-16 p-6 lg:p-6">
        <Formik
          initialValues={{
            user_id: user?.id,
            whatsapp_no: "",
            city: "",
            country: "",
            speciality: "",
            professional_id: "",
            countryDial: "",
            phone: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            CreateProfile({
              user_id: values.user_id,
              whatsapp_no: values.whatsapp_no,
              city: values.city,
              country: values.country,
              speciality: values.speciality,
              professional_id: values.professional_id,
            })
              .unwrap()
              .then(() => {
                toast.success("Profile created successfully!");
                router.push("/verif-plugin");
              })
              .catch((error) => {
                toast.error("Profile creation failed. Please try again.");
              });
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div>{steps[step].component}</div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
