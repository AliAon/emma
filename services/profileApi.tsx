"use client";
import { getToken } from "@/utils/helper";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const profileApi = createApi({
  reducerPath: "profileApi",
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
      query: (filters) => {
        const params = new URLSearchParams(filters);
        return {
          url: `/profile?${params}`,
          method: "GET",
        };
      },
      transformResponse: (response: any) => response.data,
      providesTags: ["Profile"],
    }),
  }),
});

export const { useCreateProfileMutation, useGetProfileQuery } = profileApi;
