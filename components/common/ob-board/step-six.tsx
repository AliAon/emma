import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useFormikContext } from "formik";

export default function StepSix({ setStep, total = 6 }) {
  const { errors, values } = useFormikContext();
  const handleBack = (e) => {
    e.preventDefault();
    setStep((prev) => (prev - 1 + total) % total);
  };
  console.log("Errors:", errors);
  console.log("values", values);

  return (
    <>
      <div className="space-y-6 relative h-[60vh]">
        {/* Step Title */}
        <h2 className="text-3xl font-normal text-black">
          Verify Your Identity
        </h2>
        <p className="text-[#4E4E4E] font-normal text-base">
          To keep our network safe and trusted, we need to verify your identity
          before activating your account.
        </p>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-25 absolute bottom-0 w-full">
          <Link href="/stepfive">
            <Button
              variant="outline"
              type="button"
              onClick={handleBack}
              className="px-8 py-3 rounded-xl"
              size={undefined}
            >
              Back
            </Button>
          </Link>
          <Button
            type="submit"
            className="px-8 py-3 rounded-xl"
            variant={undefined}
            size={undefined}
          >
            Start Verification
          </Button>
        </div>
      </div>
    </>
  );
}
