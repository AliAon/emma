"use client";
import withAuth from "@/components/hoc/auth-guard";
import Delete from "@/components/profile/delete";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";

const Payment = () => {
  const [showDelete, setShowDelete] = useState(false);
  const [del, setDel] = useState(false);

  const handleDeleteClick = () => {
    setShowDelete(false);
    setDel(true);
  };

  return (
    <>
      <div className="h-screen">
        <h1 className="arial font-normal text-2xl">Payment Method</h1>
        <div className="mt-5 md:w-[450px]">
          <Button
            className="py-3 px-6 text-sm block ml-auto"
            variant={undefined}
            size={undefined}
          >
            Add Card
          </Button>

          {/* Card Section */}
          <div className="bg-white rounded-2xl px-8 py-5 flex justify-between items-center mt-5 relative">
            <div className="flex gap-10 items-center">
              <Image
                src={"/assets/png/visa.png"}
                alt=""
                width={54}
                height={28}
              />
              <div>
                <p className="arial font-normal text-sm text-black">
                  Visa ending in 7830
                </p>
                <p className="arial font-normal text-xs text-[#4E4E4E]">
                  Exp. date 06/24
                </p>
              </div>
            </div>

            {/* Option Icon */}
            <Image
              src={"/assets/svg/option.svg"}
              alt="Options"
              width={5}
              height={20}
              className="cursor-pointer"
              onClick={() => setShowDelete(!showDelete)}
            />

            {/* Delete dropdown */}
            {showDelete && (
              <div
                className="absolute right-5 top-[60px] bg-white rounded-2xl p-3 w-[120px] flex items-center gap-2 shadow-md cursor-pointer z-10"
                onClick={handleDeleteClick}
              >
                <Image
                  src={"/assets/svg/del.svg"}
                  alt=""
                  width={18}
                  height={18}
                />
                <p className="font-normal text-sm text-[#F52F2F]">Delete</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Delete open={del} setOpen={setDel} />
    </>
  );
};

export default withAuth(Payment);
