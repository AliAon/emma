"use client";
import { Button } from "@/components/ui/button";
import { FaLock, FaUnlock } from "react-icons/fa";

import Image from "next/image";
import React from "react";
import List from "@/components/dashboard/list";
import TopProcedures from "@/components/dashboard/top-procedures";
import LeadCountry from "@/components/dashboard/lead-country";
import withAuth from "@/components/hoc/auth-guard";

const data = [
  {
    id: "00001",
    price: "5 tokens",
    iconBg: "#FFDDD1",
    icon: <FaLock color="#ff9871" size={15} />,
    buttonText: "New",
    buttonColor: "#FFA756",
    buttonBg: "#ffeddd",
  },
  {
    id: "00002",
    price: "5 tokens",
    iconBg: "#FFDDD1",
    icon: <FaLock color="#ff9871" size={15} />,
    buttonText: "New",
    buttonColor: "#FFA756",
    buttonBg: "#ffeddd",
  },
  {
    id: "00003",
    price: "5 tokens",
    iconBg: "#D9F7E7",
    icon: <FaUnlock color="#49d991" size={15} />,
    buttonText: "Scheduled",
    buttonColor: "#6226EF",
    buttonBg: "#e0d4fc",
  },
  {
    id: "00004",
    price: "USD $5",
    iconBg: "#D9F7E7",
    icon: <FaUnlock color="#49d991" size={15} />,
    buttonText: "Contacted",
    buttonColor: "#BA29FF",
    buttonBg: "#f1d4ff",
  },
  {
    id: "00005",
    price: "USD $5",
    iconBg: "#D9F7E7",
    icon: <FaUnlock color="#49d991" size={15} />,
    buttonText: "Completed",
    buttonColor: "#00B69B",
    buttonBg: "#ccf0eb",
  },
  {
    id: "00006",
    price: "USD $5",
    iconBg: "#D9F7E7",
    icon: <FaUnlock color="#49d991" size={15} />,
    buttonText: "Closed",
    buttonColor: "#EF3826",
    buttonBg: "#fcd7d4",
  },
];

const Dashboard = () => {
  return (
    <>
      <h1 className="arial font-normal text-2xl">Welcome back, Dr. Chang</h1>

      <div className="grid xl:grid-cols-2 mt-5 gap-10">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 ">
            <div className="bg-[#8A38F5] rounded-2xl p-4 text-white relative">
              <h2 className="font-medium text-lg">Leads this month</h2>
              <h2 className="font-bold text-center text-5xl py-10">7</h2>
              <div className="flex items-center gap-2 justify-start absolute bottom-4 left-4 right-4">
                <Image
                  src={"/assets/svg/up-arrow.svg"}
                  alt=""
                  width={18}
                  height={12}
                />
                <p className="font-normal text-sm ">
                  <span className="text-[#18FFDD]">8.5%</span> since last month
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 text-black">
              <h2 className="font-medium text-lg">Tokens</h2>
              <div className="flex justify-between gap-5">
                <h2 className="font-bold text-center text-5xl self-center">
                  15
                </h2>
                <Image
                  src={"/assets/png/coin.png"}
                  alt=""
                  width={90}
                  height={90}
                />
              </div>

              <Button
                className="font-medium text-sm block mx-auto mt-5"
                variant={undefined}
                size={undefined}
              >
                Purchase more
              </Button>
            </div>
          </div>

          <List data={data} />
        </div>

        <div>
          <LeadCountry />
          <TopProcedures />
        </div>
      </div>
    </>
  );
};
export default withAuth(Dashboard);
