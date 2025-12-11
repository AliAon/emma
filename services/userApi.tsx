"use client";
import Signup from "@/app/signup/page";
import { getToken } from "@/utils/helper";
import { createClient } from "@/utils/supabaseClient";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Session, SignInCredentials, SignUpCredentials } from "./types";
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set("x-auth-token", token);
      }
      headers.set("ngrok-skip-browser-warning", "1");

      return headers;
    },
  }),
  tagTypes: ["User"],

  endpoints: (build) => ({
    SignupUser: build.mutation<any, SignUpCredentials>({
      queryFn: async (credentials) => {
        try {
          const supabase = createClient();
          const { data: authData, error: authError } =
            await supabase.auth.signUp({
              email: credentials.email,
              password: credentials.password,
              options: {
                data: {
                  name: credentials.name,
                },
              },
            });
          if (authError) {
            return {
              error: { status: "FETCH_ERROR", error: authError.message },
            };
          }

          if (!authData.user) {
            return {
              error: { status: "FETCH_ERROR", error: "User creation failed" },
            };
          }

          // User created successfully in Supabase Auth
          // Phone is saved in authData.user.phone and authData.user.user_metadata.phone
          console.log("User created successfully in Supabase Auth");
          console.log("Phone saved in metadata:", authData.user);

          // Explicitly sign out to ensure no session is created after signup
          // This ensures users must log in separately after registration
          if (authData.session) {
            await supabase.auth.signOut();
          }
          return {
            data: {
              success: true,
              message: authData.session
                ? "Account created successfully"
                : "Account created. Please check your email to confirm your account.",
            },
          };
        } catch (error) {
          return { error: { status: "FETCH_ERROR", error: error.message } };
        }
      },
    }),
    SignIn: build.mutation<Session, SignInCredentials>({
      queryFn: async (credentials) => {
        try {
          const supabase = createClient();
          const { data, error } = await supabase.auth.signInWithPassword({
            email: credentials.email,
            password: credentials.password,
          });

          if (error) {
            return { error: { status: "FETCH_ERROR", error: error.message } };
          }

          if (!data.session) {
            return {
              error: { status: "FETCH_ERROR", error: "No session returned" },
            };
          }

          // Map Supabase session to our Session type
          const mappedSession: Session = {
            access_token: data.session.access_token,
            refresh_token: data.session.refresh_token,
            user: {
              id: data.session.user.id,
              email: data.session.user.email,
              name: data.session.user.user_metadata?.name,
              role: data.session.user.user_metadata?.role,
              phone: data.session.user.phone,
              created_at: data.session.user.created_at,
              updated_at: data.session.user.updated_at,
            },
          };

          return { data: mappedSession };
        } catch (error) {
          return { error: { status: "FETCH_ERROR", error: error.message } };
        }
      },
    }),
  }),
});

export const { useSignupUserMutation, useSignInMutation } = userApi;
