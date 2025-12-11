import React from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function EmailModal({ open, setOpen }) {
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="md:max-w-[370px]">
          <div className="">
            <p className="font-medium text-sm text-[#98A2B3]">Email</p>
            <Input
              type="email"
              placeholder="email@example.com"
              className={"mt-2 py-3! rounded-xl"}
            />
          </div>

          <div className="flex justify-center gap-3 mt-5">
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
