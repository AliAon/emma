import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";

export default function EditType({ open, setOpen }) {
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="md:max-w-[700px]">
          <DialogHeader className={undefined}>
            <DialogTitle
              className={"text-start font-normal text-lg text-[#98A2B3]"}
            >
              Result Type Preferences
            </DialogTitle>
          </DialogHeader>

          <div className="py-10 space-y-6">
            <div className="flex justify-center gap-5 ">
              <Button
                className="rounded-xl py-2.5 px-3"
                variant={undefined}
                size={undefined}
              >
                Athletic
              </Button>
              <Button
                className="rounded-xl py-2.5 px-3"
                variant={undefined}
                size={undefined}
              >
                Natural
              </Button>
              <Button
                className="rounded-xl py-2.5 px-3"
                variant={undefined}
                size={undefined}
              >
                Refined
              </Button>
            </div>

            <div className="flex justify-center gap-5">
              <Button
                className="rounded-xl py-2.5 px-3"
                variant={undefined}
                size={undefined}
              >
                Dramatic
              </Button>
              <Button
                className="rounded-xl py-2.5 px-3"
                variant={undefined}
                size={undefined}
              >
                Voluminous
              </Button>
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
