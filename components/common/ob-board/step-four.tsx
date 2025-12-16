"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ErrorMessage, useFormikContext } from "formik";

type FormValues = {
  speciality: string;
};

type Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  total?: number;
};

export default function StepFour({ setStep, total = 4 }: Props) {
  const { values, setFieldValue, validateForm, setTouched } =
    useFormikContext<FormValues>();

  const handleNext = async () => {
    const errors = await validateForm();

    setTouched({ speciality: true });

    if (errors.speciality) return;

    setStep((prev) => (prev + 1) % total);
  };

  const handleBack = () => {
    setStep((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="space-y-6 relative h-[60vh]">
      {/* Step Title */}
      <h2 className="text-3xl font-normal text-black">Specialty</h2>

      <p className="text-[#4E4E4E] text-base">
        Indicate your medical specialty (e.g., Plastic Surgery, Bariatric
        Surgery).
      </p>

      {/* Specialty Select */}
      <div className="max-w-md">
        <Select
          value={values.speciality}
          onValueChange={(value) => setFieldValue("speciality", value)}
        >
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

        <ErrorMessage
          name="speciality"
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
          variant={undefined}
          size={undefined}
          onClick={handleNext}
          className="px-8 py-3 rounded-xl"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
