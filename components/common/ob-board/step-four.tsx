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

export default function StepFour({ setStep, total = 4 }) {
  const [specialty, setSpecialty] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    setStep((prev) => (prev + 1) % total);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep((prev) => (prev - 1 + total) % total);
  };

  return (
    <>
      <form onSubmit={handleNext} className="space-y-6 relative h-[60vh]">
        {/* Step Title */}
        <h2 className="text-3xl font-normal text-black">Specialty</h2>
        <p className="text-[#4E4E4E] font-normal text-base">
          Indicate your medical specialty (e.g., Plastic Surgery, Bariatric
          Surgery).
        </p>

        {/* Selector */}
        <div>
          <Select onValueChange={setSpecialty}>
            <SelectTrigger>
              <SelectValue placeholder="Choose Specialty" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="plastic-surgery">Plastic Surgery</SelectItem>
                <SelectItem value="bariatrics">Bariatric Surgery</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
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
