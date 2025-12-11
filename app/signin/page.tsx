"use client";
import Navbar from "@/components/common/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSignInMutation } from "@/services/userApi";
import { Session, SignInCredentials } from "@/services/types";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { authuser, isLogin, usertoken } from "@/features/authSlice";
import { Loader } from "lucide-react";

export default function Signin() {
  const router = useRouter();
  const [SignIn, { isLoading }] = useSignInMutation();
  const dispatch = useDispatch();

  // Yup Schema
  const SigninSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <>
      <Navbar />

      <section className="max-w-7xl py-16 md:pt-20 md:pb-16 mx-5 md:mx-8 lg:mx-auto md:min-h-screen grid grid-cols-12">
        <div className="hidden lg:col-span-6 lg:flex items-center justify-center">
          <Image
            src="/assets/jpg/signin-smile-doctor.jpg"
            alt="Doctor"
            width={1400}
            height={400}
            className="w-full px-6 rounded-2xl object-cover"
          />
        </div>

        <div className="col-span-12 lg:col-span-6 flex md:items-center text-center">
          <div className="w-full px-6 flex flex-col md:items-center md:justify-center">
            <h2 className="font-normal text-[30px] md:text-[50px] text-black mb-8 xl:mb-25 text-center leading-tight">
              Hi Doctor!
              <br />
              Welcome back.
            </h2>

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={SigninSchema}
              onSubmit={async (
                values: SignInCredentials,
                { setSubmitting }
              ) => {
                try {
                  console.log("Formik Values", values);

                  const res: Session = await SignIn({
                    email: values.email,
                    password: values.password,
                  }).unwrap();
                  console.log("res", res);

                  localStorage.setItem("token", res.access_token);
                  localStorage.setItem("user", JSON.stringify(res.user));
                  dispatch(usertoken(res.access_token));
                  dispatch(authuser(res.user));
                  dispatch(isLogin(true));

                  toast.success("Logged in successfully!");

                  router.push("/dashboard");
                } catch (error: any) {
                  toast.error(
                    error?.data?.message ||
                      error?.message ||
                      "Something went wrong during login!"
                  );
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({ errors, touched }) => (
                <Form className="space-y-6 w-full text-start">
                  {/* Email */}
                  <div>
                    <label className="block text-sm md:text-lg font-normal text-[#424242] mb-1">
                      Email address
                    </label>

                    <Field
                      as={Input}
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className={`w-full bg-[#F1F4F9] rounded-xl ${
                        errors.email && touched.email ? "border-red-500" : ""
                      }`}
                    />

                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Password */}
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-sm md:text-lg font-normal text-[#424242]">
                        Password
                      </label>
                      <a
                        href="#"
                        className="text-sm md:text-lg font-normal text-[#424242] hover:text-purple-600"
                      >
                        Forgot Password?
                      </a>
                    </div>

                    <Field
                      as={Input}
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      className={`w-full bg-[#F1F4F9] rounded-xl ${
                        errors.password && touched.password
                          ? "border-red-500"
                          : ""
                      }`}
                    />

                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  {/* Remember checkbox */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="remember"
                      className="w-4 h-4 accent-purple-600"
                    />
                    <label
                      htmlFor="remember"
                      className="text-sm md:text-lg text-[#424242]"
                    >
                      Remember Password
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center">
                    <Button
                      variant="default"
                      size="default"
                      type="submit"
                      className="w-fit rounded-[15px] py-3 px-6"
                    >
                      {isLoading ? <Loader /> : "Sign in"}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>

            <p className="text-center text-sm md:text-lg font-normal text-[#424242] mt-6">
              {`Don’t have an account?`}{" "}
              <Link
                href={"/steps"}
                className="text-[#5A8CFF] hover:underline font-medium"
              >
                Join Emma
              </Link>
            </p>
          </div>
        </div>
      </section>

      <div className="bg-[#351F65] py-5 md:py-[33px]">
        <div className="max-w-7xl mx-5 lg:mx-8 xl:mx-auto flex justify-between items-center">
          <div>
            <Image
              src="/assets/svg/emma-logo-purple.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-20 md:w-[100px] lg:w-auto"
            />
          </div>
          <div className="flex justify-center items-center gap-4">
            <div>
              <Image
                src="/assets/png/facebook-white.png"
                alt="facebook icon"
                width={300}
                height={25}
                className="w-7 h-7 "
              />
            </div>
            <div>
              <Image
                src="/assets/png/instagram-white.png"
                alt="instagram icon"
                width={300}
                height={25}
                className="w-7 h-7 "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
