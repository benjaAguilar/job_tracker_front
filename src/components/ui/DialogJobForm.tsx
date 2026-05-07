import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "./select";
import { useState } from "react";
import { TechAdder } from "./TechAdder";

interface DialogJobTypes {
  title: string;
}

export function DialogJobForm({ title }: DialogJobTypes) {
  const [state, setState] = useState(title.toLocaleLowerCase());

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" aria-label="new job">
            +
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Create job application</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="vacantName">Vacant name</Label>
              <Input
                id="vacantName"
                name="vacantName"
                placeholder="web dev"
                required
              />
            </Field>
            <Field>
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                placeholder="adult swim"
                required
              />
            </Field>
            <Field>
              <Label htmlFor="state">State</Label>
              <Select
                name="state"
                value={state}
                onValueChange={(val) => {
                  setState(val);
                }}
              >
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue placeholder="Select a state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>State</SelectLabel>
                    <SelectItem value="offer">Offer</SelectItem>
                    <SelectItem value="applied">Applied</SelectItem>
                    <SelectItem value="interview">Interview</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            {state === "rejected" ? (
              <Field>
                <Label htmlFor="rejectionReason">Rejection reason</Label>
                <Input id="rejectionReason" name="rejectionReason" required />
              </Field>
            ) : null}
            <TechAdder />
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Create Job</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
