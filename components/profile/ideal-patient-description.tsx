import React from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function IdealPatientDescription({ open, setOpen }) {
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="md:max-w-[700px]">
          <div className="">
            <p className="font-medium text-sm text-[#98A2B3]">
              Describe your ideal patient
            </p>
            <div className="mt-5">
              <Textarea
                className={"border-[#A6A6A6]! "}
                placeholder="Type your message here."
              />
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
