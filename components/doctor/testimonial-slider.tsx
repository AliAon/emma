import Image from "next/image";
import React from "react";

export default function TestimonialSlider() {
  return (
    <>
      <section className="bg-[#F1F4F9] py-16">
        <div className="max-w-4xl flex flex-col items-center md:items-start mx-auto px-6">
          {/* Quote Text */}
          <p className="text-2xl md:text-3xl font-medium text-gray-900 leading-snug">
            “Emma has become an essential part of how new patients discover my
            practice—patients feel reassured knowing I’m verified and
            board-certified.”
          </p>

          {/* Doctor Info */}
          <div className="flex items-center gap-3 mt-6">
            <Image
              src="/assets/jpg/doctor-hospital-team.jpg"
              alt="Doctor"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-gray-900 font-medium">Dr. Mario Olivares</p>
              <p className="text-gray-500 text-sm">Bariatric Surgeon</p>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-4 mt-8">
            <button className="">
              <Image
                src="/assets/svg/arrow-left.svg"
                alt="Doctor"
                width={35}
                height={35}
                className="rounded-full"
              />
            </button>
            <button className="">
              <Image
                src="/assets/svg/arrow-right.svg"
                alt="Doctor"
                width={35}
                height={35}
                className="rounded-full"
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
