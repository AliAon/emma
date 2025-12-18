"use client";
import { getToken } from "@/utils/helper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
    prepareHeaders: (headers) => {
      const token = getToken();
      console.log("token", token);

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("ngrok-skip-browser-warning", "1");

      return headers;
    },
  }),
  tagTypes: ["Profile"],

  endpoints: (build) => ({
    CreateProfile: build.mutation<any, any>({
      query: (credentials) => ({
        url: "/profile",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["Profile"],
    }),
    getProfile: build.query({
      query: () => {
        return {
          url: `/profile/userId`,
          method: "GET",
        };
      },
      transformResponse: (response: any) => response.data,
      providesTags: ["Profile"],
    }),
    veriffVerify: build.mutation<any, any>({
      query: (credentials) => ({
        url: "/veriff/verifyUser",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useCreateProfileMutation,
  useGetProfileQuery,
  useLazyGetProfileQuery,
  useVeriffVerifyMutation,
} = profileApi;
