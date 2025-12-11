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

const cityOptions = {
  MX: ["Mexico City", "Guadalajara", "Monterrey", "Cancún", "Tijuana"],
  US: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
  CA: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
  UK: ["London", "Manchester", "Birmingham", "Liverpool", "Leeds"],
  AU: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
  IN: ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai"],
  PK: ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad"],
  FR: ["Paris", "Lyon", "Marseille", "Toulouse", "Nice"],
  DE: ["Berlin", "Munich", "Frankfurt", "Hamburg", "Cologne"],
  BR: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador", "Fortaleza"],
  JP: ["Tokyo", "Osaka", "Kyoto", "Nagoya", "Fukuoka"],
  CN: ["Beijing", "Shanghai", "Shenzhen", "Guangzhou", "Chengdu"],
  ZA: ["Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth"],
  IT: ["Rome", "Milan", "Naples", "Turin", "Florence"],
  ES: ["Madrid", "Barcelona", "Valencia", "Seville", "Bilbao"],
  RU: ["Moscow", "Saint Petersburg", "Kazan", "Novosibirsk", "Sochi"],
  KR: ["Seoul", "Busan", "Incheon", "Daegu", "Daejeon"],
  AE: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Fujairah"],
  AR: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza", "La Plata"],
  NG: ["Lagos", "Abuja", "Kano", "Ibadan", "Port Harcourt"],
};

export default function StepTwo({ setStep, total, country }) {
  const [city, setCity] = useState("");

  const cities = cityOptions[country] || [];

  const handleNext = (e) => {
    e.preventDefault();
    setStep((prev) => (prev + 1) % total);
  };

  const handleBack = (e) => {
    e.preventDefault();
    setStep((prev) => (prev - 1 + total) % total);
  };

  return (
    <form onSubmit={handleNext} className="space-y-6 relative h-[60vh]">
      <h2 className="text-3xl font-normal text-black">City</h2>
      <p className="text-[#4E4E4E] font-normal text-base">
        Enter the main city where you provide your medical services.
      </p>

      <div>
        <Select onValueChange={setCity}>
          <SelectTrigger className="">
            <SelectValue placeholder="Choose your city" />
          </SelectTrigger>
          <SelectContent className="max-h-[200px] overflow-y-auto">
            <SelectGroup>
              {cities.length > 0 ? (
                cities.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))
              ) : (
                <SelectItem value="none" disabled>
                  No cities available for this country
                </SelectItem>
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

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
