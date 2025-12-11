import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";

export default function EditSpecialty({ open, setOpen }) {
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="md:max-w-[700px] ">
          <DialogHeader className={undefined}>
            <DialogTitle
              className={"text-start font-normal text-lg text-[#98A2B3]"}
            >
              Specialty
            </DialogTitle>
          </DialogHeader>

          <div className="py-5 md:py-10 space-y-4 md:space-y-6 ">
            <div className="space-y-4 md:space-y-0 md:flex justify-center gap-5 ">
              <Button
                className="rounded-xl py-2.5 px-3"
                variant={undefined}
                size={undefined}
              >
                Weight Loss Surgery
              </Button>
              <Button
                className="rounded-xl py-2.5 px-3"
                variant={undefined}
                size={undefined}
              >
                Gastric Sleeve Surgery
              </Button>
              <Button
                className="rounded-xl py-2.5 px-3"
                variant={undefined}
                size={undefined}
              >
                Gallbladder Removal
              </Button>
            </div>

            <div className="space-y-4 md:space-y-0 space-x-4 md:space-x-0 md:flex justify-center gap-5">
              <Button
                className="rounded-xl py-2.5 px-3"
                variant={undefined}
                size={undefined}
              >
                Hiatal Hernia
              </Button>
              <Button
                className="rounded-xl py-2.5 px-3"
                variant={undefined}
                size={undefined}
              >
                Gastric bypass
              </Button>
              <Button
                className="rounded-xl py-2.5 px-3"
                variant={undefined}
                size={undefined}
              >
                Adjustable Gastric Band
              </Button>
            </div>

            <div className="space-y-4 md:space-y-0 space-x-4 md:space-x-0 md:flex justify-center gap-5">
              <Button
                className="rounded-xl py-2.5 px-3"
                variant={undefined}
                size={undefined}
              >
                BPD/DS
              </Button>
              <Button
                className="rounded-xl py-2.5 px-3"
                variant={undefined}
                size={undefined}
              >
                Intragastric Balloon
              </Button>
            </div>
          </div>
          <div className=" flex justify-end gap-3 mt-5">
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
