"use client";
import withAuth from "@/components/hoc/auth-guard";
import Delete from "@/components/profile/delete";
import EditProfile from "@/components/profile/edit-profile";
import EditSpecialty from "@/components/profile/edit-specialty";
import EditType from "@/components/profile/edit-type";
import EditInfo from "@/components/profile/editi-info";
import EmailModal from "@/components/profile/email-modal";
import IdealPatientDescription from "@/components/profile/ideal-patient-description";
import { Button } from "@/components/ui/button";
import { User } from "@/services/types";
import Image from "next/image";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState(false);
  const [editInfo, setEditInfo] = useState(false);
  const [deleteProfile, setDeleteProfile] = useState(false);
  const [editSpecialty, setEditSpecialty] = useState(false);
  const [editType, setEditType] = useState(false);
  const [idealPatientDescription, setIdealPatientDescription] = useState(false);
  const auth = useSelector((state: any) => state.auth);
  const user = auth.user as User;
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-normal text-2xl">My Profile</h1>
        {/* <p
          onClick={() => setDeleteProfile(true)}
          className="font-semibold text-sm text-[#8A38F5] underline cursor-pointer"
        >
          Delete
        </p> */}
      </div>

      <div className="grid xl:grid-cols-12 gap-5 mt-5">
        <div className="xl:col-span-8 ">
          <div className="grid xl:grid-cols-2 gap-5">
            <div className="relative bg-white rounded-2xl p-5 flex gap-5 items-center">
              <p
                onClick={() => setOpen(true)}
                className="absolute top-5 right-5 font-semibold text-sm text-[#8A38F5] underline cursor-pointer"
              >
                edit
              </p>

              <Image src={"/assets/png/dp.png"} alt="" width={80} height={80} />
              <div>
                <p className="font-semibold text-xl text-[#101828]">
                  {user?.name}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-5 relative">
              <p
                onClick={() => setEmail(true)}
                className="absolute top-5 right-5 font-semibold text-sm text-[#8A38F5] underline cursor-pointer"
              >
                edit
              </p>

              <p className="font-semibold text-sm text-[#98A2B3]">Email</p>
              <p className="font-normal text-base text-[#101828]">
                {user?.email}
              </p>
              <Button variant="outline" className="py-2 mt-5" size={undefined}>
                Reset Password
              </Button>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 mt-5 pb-14">
            <h2 className="font-semibold text-lg text-black">
              Medical Profile
            </h2>
            <div className="mt-5 grid md:grid-cols-2 gap-5 md:gap-20">
              <div className="space-y-5">
                <div>
                  <p className="font-semibold text-sm text-[#98A2B3]">
                    Professional ID
                  </p>
                  <p className="font-normal text-base text-[#131313] mt-1">
                    1243458
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-sm text-[#98A2B3]">
                    Specialty
                  </p>
                  <p className="font-normal text-base text-[#131313] mt-1">
                    Bariatric Surgery
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-sm text-[#98A2B3]">
                      Emphasis
                    </p>
                    <p
                      onClick={() => setEditSpecialty(true)}
                      className="font-semibold text-sm text-[#8A38F5] underline cursor-pointer"
                    >
                      edit
                    </p>
                  </div>
                  <p className="font-normal text-base text-[#131313] mt-1">
                    Weight Loss Surgery
                  </p>
                  <p className="font-normal text-base text-[#131313] mt-1">
                    Gallbladder Removal
                  </p>
                  <p className="font-normal text-base text-[#131313] mt-1">
                    Hiatal Hernia
                  </p>
                  <p className="font-normal text-base text-[#131313] mt-1">
                    Gastric Sleeve Surgery
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-sm text-[#98A2B3]">
                      Result Type Preferences
                    </p>
                    <p
                      onClick={() => setEditType(true)}
                      className="font-semibold text-sm text-[#8A38F5] underline cursor-pointer"
                    >
                      edit
                    </p>
                  </div>
                  <p className="font-normal text-base text-[#131313] mt-1">
                    Natural
                  </p>
                  <p className="font-normal text-base text-[#131313] mt-1">
                    Athletic
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-sm text-[#98A2B3]">
                      Ideal Patient Description
                    </p>
                    <p
                      onClick={() => setIdealPatientDescription(true)}
                      className="font-semibold text-sm text-[#8A38F5] underline cursor-pointer"
                    >
                      edit
                    </p>
                  </div>
                  <p className="font-normal text-base text-[#131313] mt-1 lg:w-[70%]">
                    I work best with patients who value open communication, are
                    proactive about their health, and are looking for natural,
                    long-lasting results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-4">
          <div className="bg-white rounded-2xl p-5 relative">
            <p
              onClick={() => setEditInfo(true)}
              className="absolute top-5 right-5 font-semibold text-sm text-[#8A38F5] underline cursor-pointer"
            >
              edit
            </p>

            <div className="space-y-5">
              <div>
                <p className="font-semibold text-sm text-[#98A2B3]">Sex</p>
                <p className="font-normal text-base text-[#131313] mt-1">
                  Male
                </p>
              </div>
              <div>
                <p className="font-semibold text-sm text-[#98A2B3]">Pronouns</p>
                <p className="font-normal text-base text-[#131313] mt-1">
                  He/Him
                </p>
              </div>
              <div>
                <p className="font-semibold text-sm text-[#98A2B3]">Country</p>
                <p className="font-normal text-base text-[#131313] mt-1">
                  United States
                </p>
              </div>
              <div>
                <p className="font-semibold text-sm text-[#98A2B3]">
                  Phone Number
                </p>
                <p className="font-normal text-base text-[#131313] mt-1">
                  +81911924828
                </p>
              </div>
              <div>
                <p className="font-semibold text-sm text-[#98A2B3]">
                  Date of Birth
                </p>
                <p className="font-normal text-base text-[#131313] mt-1">
                  11/15/2024
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 mt-5">
            <p className="font-normal text-sm text-black">Disclaimer</p>
            <p className="font-normal text-xs text-black mt-2">
              The information provided in your “ideal patient” profile will be
              used by Emma’s proprietary algorithm to assist in matching you
              with prospective patients. While every effort is made to align
              leads with your stated preferences, Emma does not guarantee that
              all leads will meet your exact criteria. You may receive
              additional qualified leads seeking procedures you provide, even if
              they do not fully correspond to your described profile.
            </p>
          </div>
        </div>
      </div>

      <EditProfile open={open} setOpen={setOpen} />
      <EmailModal open={email} setOpen={setEmail} />
      <EditInfo open={editInfo} setOpen={setEditInfo} />
      <EditSpecialty open={editSpecialty} setOpen={setEditSpecialty} />
      <EditType open={editType} setOpen={setEditType} />
      <IdealPatientDescription
        open={idealPatientDescription}
        setOpen={setIdealPatientDescription}
      />
      <Delete open={deleteProfile} setOpen={setDeleteProfile} />
    </>
  );
};
export default withAuth(Profile);
