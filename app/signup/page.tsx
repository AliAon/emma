"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdOutlineVisibility } from "react-icons/md";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loading from "@/components/common/loading";
import SignupForm from "@/components/SignupForm";
import { useSignupUserMutation } from "@/services/userApi";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Loader } from "lucide-react";
import { toast } from "sonner";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(true);
  const router = useRouter();
  const [SignupUser, { isLoading }] = useSignupUserMutation();

  // Formik validation schema
  const SignupSchema = Yup.object({
    name: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Min 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values: any) => {
    try {
      // Call your mutation (if needed)
      await SignupUser({
        email: values.email,
        password: values.password,
        name: values.name,
      }).unwrap();
      toast("Signup successful!", {
        description:
          "Please check your email for verification. then proceed to on-boarding",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
        position: "top-center",
      });

      router.push("/signin");
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Signup failed. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <Loading text="Patients are waiting… setting up your account now." />
    );
  }

  return (
    <section
      className="min-h-screen pt-4"
      style={{ background: "linear-gradient(to bottom, #ffffff, #EDE0FF)" }}
    >
      <div className="max-w-7xl mx-5 md:mx-8 lg:mx-auto">
        {/* Logo */}
        <Image
          src="/assets/svg/Emma-logo.svg"
          alt="Emma Logo"
          width={100}
          height={50}
        />

        <div className="my-14 h-[calc(100vh-100px)] w-full max-w-lg flex flex-col items-center md:justify-center text-center space-y-8 mx-auto">
          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="w-full space-y-8">
                {/* Full Name */}
                <div className="w-full">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm md:text-xl font-normal text-[#424242]">
                      Full name
                    </label>
                  </div>

                  <Field
                    as={Input}
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-[#F1F4F9] py-3! rounded-xl"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Email */}
                <div className="w-full">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm md:text-xl font-normal text-[#424242]">
                      Email address
                    </label>
                  </div>

                  <Field
                    as={Input}
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-[#F1F4F9] py-3! rounded-xl"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Password */}
                <div className="w-full">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm md:text-xl font-normal text-[#424242]">
                      Password
                    </label>
                  </div>

                  <div className="relative">
                    <Field
                      as={Input}
                      name="password"
                      type={showPassword ? "password" : "text"}
                      placeholder="Enter your password"
                      className="w-full bg-[#F1F4F9] py-3! rounded-xl"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((s) => !s)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                    >
                      {showPassword ? (
                        <Image
                          src={"/assets/svg/eyes.svg"}
                          alt=""
                          width={17}
                          height={8}
                        />
                      ) : (
                        <MdOutlineVisibility size={20} />
                      )}
                    </button>
                  </div>

                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Submit */}
                <Button
                  size={""}
                  variant={""}
                  type="submit"
                  className="py-2! px-8!"
                >
                  {isLoading ? <Loader /> : "Start"}
                </Button>
              </Form>
            )}
          </Formik>

          {/* Footer */}
          <p className="text-[#424242] text-base">
            Already have an account?
            <Link
              href="/signin"
              className="text-[#5A8CFF] ml-2 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      <SignupForm />
    </section>
  );
}
