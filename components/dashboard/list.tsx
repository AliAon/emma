"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function List({ data }) {
  return (
    <>
      <div className="hidden md:block">
        <div className="bg-white rounded-2xl p-4 mt-5">
          <div className="flex justify-between">
            <p className="font-normal text-[#4E4E4E] text-sm w-[60px]">
              Lead ID
            </p>
            <p className="font-normal text-[#4E4E4E] text-sm w-[90px] md:w-[70px]">
              Price
            </p>
            <p className="font-normal text-[#4E4E4E] text-sm w-[100px] md:w-28">
              Unlock Status
            </p>
            <p className="font-normal text-[#4E4E4E] text-sm w-[127px]">
              Progress Status
            </p>
          </div>

          <div>
            {data.map((item, index) => (
              <div key={index} className="flex justify-between mt-3 space-y-4">
                <p className="self-center font-normal text-black text-sm w-[60px]">
                  {item.id}
                </p>
                <p className="self-center font-normal text-black text-sm w-[90px] md:w-[70px]">
                  {item.price}
                </p>
                <div className="w-[100px] md:w-28">
                  <div
                    className="w-[47px] h-[27px] p-3 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    {item.icon}
                  </div>
                </div>
                <div className="w-[127px]">
                  <Button
                    className="font-semibold text-sm py-1 px-7 w-full rounded-[5px]"
                    style={{
                      backgroundColor: item.buttonBg,
                      color: item.buttonColor,
                    }}
                    variant={undefined}
                    size={undefined}
                  >
                    {item.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div className="bg-white rounded-2xl p-3 mt-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-3 last:border-none"
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold text-sm text-black">
                  Lead ID: {item.id}
                </p>
                <p className="font-medium text-sm text-[#4E4E4E]">
                  {item.price}
                </p>
              </div>

              <div className="flex justify-between items-center mt-2">
                <div
                  className="w-[47px] h-[27px] p-3 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: item.iconBg }}
                >
                  {item.icon}
                </div>

                <Button
                  className="font-semibold text-xs py-1 px-5 rounded-[5px]"
                  style={{
                    backgroundColor: item.buttonBg,
                    color: item.buttonColor,
                  }}
                  variant={undefined}
                  size={undefined}
                >
                  {item.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
