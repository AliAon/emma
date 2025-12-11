import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import Image from "next/image";
import { Input } from "../ui/input";

export default function EditProfile({ open, setOpen }) {
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="md:max-w-[700px]">
          <DialogHeader className={undefined}>
            <DialogTitle
              className={"text-start font-normal text-lg text-[#98A2B3]"}
            >
              Your Profile
            </DialogTitle>
          </DialogHeader>

          <div className="md:px-10 mt-5 md:w-[80%]">
            <div className="space-y-4 md:space-y-0 md:flex gap-4 items-center">
              <Image
                src={"/assets/png/dp.png"}
                alt="Profile Picture"
                width={80}
                height={80}
                className="w-[100px] h-[100px] md:w-auto md:h-auto mx-auto md:mx-0"
              />
              <Button
                className={"py-2.5 text-sm w-full md:w-auto"}
                variant={undefined}
                size={undefined}
              >
                Change picture
              </Button>
              <Button
                className={
                  " py-2.5 text-sm w-full md:w-auto text-[#F52F2F] bg-[#FFDDD1]"
                }
                variant={undefined}
                size={undefined}
              >
                Delete picture
              </Button>
            </div>

            <div className="mt-8">
              <p className="font-medium text-sm text-[#202224]">First Name</p>
              <Input type="text" className={"mt-2 py-3! rounded-xl"} />
            </div>
            <div className="mt-4">
              <p className="font-medium text-sm text-[#202224]">Last Name</p>
              <Input type="text" className={"mt-2 py-3! rounded-xl"} />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-5">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className={"py-2.5"}
              size={undefined}
            >
              Cancel
            </Button>
            <Button
              className={"py-2.5"}
              onClick={() => {
                setOpen(false);
                console.log("Card deleted");
              }}
              variant={undefined}
              size={undefined}
            >
              Update
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
