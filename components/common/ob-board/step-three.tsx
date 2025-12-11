"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const countries = [{ code: "MX", name: "Mexico" }];

export default function StepThree({ setStep, total, setCountry }) {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    if (selectedCountry) {
      setCountry(selectedCountry);
      setStep((prev) => prev + 1);
    } else {
      alert("Please select a country before continuing.");
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep((prev) => (prev - 1 + total) % total);
  };

  return (
    <form onSubmit={handleNext} className="space-y-6 relative h-[60vh]">
      <div>
        <h2 className="text-3xl font-normal text-black">Country</h2>
        <p className="text-[#4E4E4E] font-normal text-base mt-2">
          Select the country where you provide your medical services.
        </p>
        <p className="text-[#4E4E4E] font-normal text-xs mt-1">
          (Emma is currently available exclusively for doctors practicing in
          Mexico)
        </p>
      </div>

      <Select onValueChange={setSelectedCountry}>
        <SelectTrigger className="">
          <SelectValue placeholder="Choose your country" />
        </SelectTrigger>
        <SelectContent className="max-h-[200px] overflow-y-auto">
          <SelectGroup>
            {countries.map((c) => (
              <SelectItem
                key={c.code}
                value={c.code}
                disabled={c.code !== "MX"}
                className={
                  c.code !== "MX" ? "opacity-50 cursor-not-allowed" : ""
                }
              >
                {c.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="flex justify-between absolute bottom-0 w-full">
        <Button
          variant="outline"
          type="button"
          onClick={handleBack}
          className="px-8 py-3 rounded-xl"
          size={undefined}
        >
          Back
        </Button>

        <Button
          type="submit"
          className="px-8 py-3 rounded-xl"
          variant={undefined}
          size={undefined}
        >
          Next
        </Button>
      </div>
    </form>
  );
}
