"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const countries = [
  { code: "US", dial: "+1" },
  { code: "CA", dial: "+1" },
  { code: "MX", dial: "+52" },
  { code: "GB", dial: "+44" },
  { code: "IN", dial: "+91" },
  { code: "AU", dial: "+61" },
  { code: "DE", dial: "+49" },
  { code: "FR", dial: "+33" },
  { code: "IT", dial: "+39" },
  { code: "ES", dial: "+34" },
  { code: "BR", dial: "+55" },
  { code: "CN", dial: "+86" },
  { code: "JP", dial: "+81" },
  { code: "PK", dial: "+92" },
  { code: "SA", dial: "+966" },
  { code: "AE", dial: "+971" },
  { code: "ZA", dial: "+27" },
  { code: "TR", dial: "+90" },
  { code: "SG", dial: "+65" },
  { code: "BD", dial: "+880" },
  { code: "ID", dial: "+62" },
  { code: "MY", dial: "+60" },
  { code: "TH", dial: "+66" },
  { code: "PH", dial: "+63" },
  { code: "VN", dial: "+84" },
  { code: "NG", dial: "+234" },
  { code: "EG", dial: "+20" },
  { code: "AR", dial: "+54" },
  { code: "NZ", dial: "+64" },
  { code: "KR", dial: "+82" },
];

export default function StepOne({ setStep, total = 2 }) {
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep((prev) => (prev + 1) % total);
  };

  return (
    <>
      <form onSubmit={handleNext} className="space-y-6 relative h-[60vh]">
        <h2 className="text-3xl font-normal text-black">Whatsapp Number</h2>
        <p className="text-[#4E4E4E] font-normal text-base">
          Please provide your WhatsApp number so Emma can connect you with
          patients in real time.
        </p>

        <div className="flex gap-2 items-center">
          <Select>
            <SelectTrigger className="w-60">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent className="max-h-64 overflow-y-auto">
              <SelectGroup>
                {countries.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    <div className="flex items-center gap-2">
                      <img
                        src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                        alt={""}
                        width={20}
                        height={15}
                        className="rounded-sm"
                      />
                      <span className="">({country.dial})</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input
            type="tel"
            inputMode="tel"
            placeholder="201-555-5555"
            className="w-full py-3! rounded-xl md:py-full"
          />
        </div>

        <div>
          <Button
            type="submit"
            className={"py-3 px-8 rounded-xl absolute bottom-0"}
            variant={undefined}
            size={undefined}
          >
            Next
          </Button>
        </div>
      </form>
    </>
  );
}
