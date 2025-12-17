"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ErrorMessage, useFormikContext } from "formik";

type FormValues = {
  professional_id: string;
};

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  total?: number;
  handleNext: () => void;
};

export default function StepFive({ setStep, total = 5 }: Props) {
  const { values, setFieldValue, validateForm, setTouched, errors } =
    useFormikContext<FormValues>();

  const handleNext = async () => {
    const errors = await validateForm();

    setTouched({ professional_id: true });

    if (errors.professional_id) return;

    setStep((prev) => (prev + 1) % total);
  };

  const handleBack = () => {
    setStep((prev) => (prev - 1 + total) % total);
  };

  console.log("errors", errors);

  return (
    <div className="space-y-6 relative h-[60vh]">
      {/* Step Title */}
      <h2 className="text-3xl font-normal text-black">Professional ID</h2>
      <p className="text-[#4E4E4E] text-base">
        Please provide your professional license number (Cédula Profesional) for
        verification purposes.
      </p>

      {/* Input */}
      <div className="max-w-md">
        <Input
          type="text"
          placeholder="Professional ID"
          value={values.professional_id}
          onChange={(e) => setFieldValue("professional_id", e.target.value)}
          className="w-full py-2! rounded-xl md:py-full"
        />
        <ErrorMessage
          name="professional_id"
          component="p"
          className="text-red-500 text-xs mt-1"
        />
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between absolute bottom-0 w-full">
        <Button
          variant="outline"
          type="button"
          size={undefined}
          onClick={handleBack}
          className="px-8 py-3 rounded-xl"
        >
          Back
        </Button>

        <Button
          type="button"
          size={undefined}
          variant={undefined}
          onClick={handleNext}
          className="px-8 py-3 rounded-xl"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
