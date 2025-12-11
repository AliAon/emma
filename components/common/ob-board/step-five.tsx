"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

export default function StepFive({ setStep, total = 5, handleNext }) {
  const [license, setLicense] = useState("");

  const handleBack = (e) => {
    e.preventDefault();
    setStep((prev) => (prev - 1 + total) % total);
  };

  return (
    <>
      <form onSubmit={handleNext} className="space-y-6 relative h-[60vh]">
        {/* Step Title */}
        <h2 className="text-3xl font-normal text-black">Professional ID</h2>
        <p className="text-[#4E4E4E] font-normal text-base">
          Please provide your professional license number (Cédula Profesional)
          for verification purposes.
        </p>

        {/* Selector */}
        <div>
          <Input
            type="text"
            placeholder="Professional ID"
            value={license}
            onChange={(e) => setLicense(e.target.value)}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-25 absolute bottom-0 w-full">
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
    </>
  );
}
