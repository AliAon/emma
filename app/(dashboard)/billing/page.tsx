"use client";
import History from "@/components/billing/history";
import PayLead from "@/components/billing/pay-lead";
import Tokens from "@/components/billing/tokens";
import withAuth from "@/components/hoc/auth-guard";
import React from "react";

const leads = [
  {
    name: "Emma_ Lead",
    date: "Jan 1, 2024",
    status: "Paid",
    amount: "USD $5.00",
  },
  {
    name: "John_ Lead",
    date: "Feb 3, 2024",
    status: "Pending",
    amount: "USD $8.00",
  },
  {
    name: "Sophia_ Lead",
    date: "Mar 12, 2024",
    status: "Paid",
    amount: "USD $12.00",
  },
  {
    name: "Emma_ Lead",
    date: "Jan 1, 2024",
    status: "Paid",
    amount: "USD $5.00",
  },
  {
    name: "John_ Lead",
    date: "Feb 3, 2024",
    status: "Pending",
    amount: "USD $8.00",
  },
  {
    name: "Sophia_ Lead",
    date: "Mar 12, 2024",
    status: "Paid",
    amount: "USD $12.00",
  },
];

const Billing = () => {
  return (
    <>
      <h1 className="arial font-normal text-2xl">Plans & Billing</h1>
      <p className="font-normal text-base text-[#202224] mt-3">
        Manage plan and billing history here{" "}
      </p>
      <div className="grid xl:grid-cols-2 mt-5 gap-10">
        <div>
          <PayLead />
        </div>
        <div>
          <Tokens />
        </div>
      </div>
      <History leads={leads} />
    </>
  );
};

export default withAuth(Billing);
