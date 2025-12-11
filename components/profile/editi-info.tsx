import React from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function EditInfo({ open, setOpen }) {
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="md:max-w-[370px] ">
          <div className="space-y-5">
            <div>
              <p className="font-medium text-sm text-[#98A2B3] pb-1">Sex</p>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Sex" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div>
              <p className="font-medium text-sm text-[#98A2B3] pb-1">
                Pronouns
              </p>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Pronouns" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="he-him">He/Him</SelectItem>
                    <SelectItem value="she-her">She/Her</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div>
              <p className="font-medium text-sm text-[#98A2B3] pb-1">Country</p>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="mexico">Mexico</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div>
              <p className="font-medium text-sm text-[#98A2B3]">
                Phone Number (with Country Code)
              </p>
              <Input
                type="number"
                placeholder="+81911924828"
                className={"mt-2 py-3! rounded-xl"}
              />
            </div>

            <div>
              <p className="font-medium text-sm text-[#98A2B3]">
                Date of Birth
              </p>
              <Input
                type="date"
                placeholder="11/15/2024"
                className={"mt-2 py-3! rounded-xl"}
              />
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-5">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className={"py-2.5 w-full"}
              size={undefined}
            >
              Cancel
            </Button>
            <Button
              className={"py-2.5 w-full"}
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
