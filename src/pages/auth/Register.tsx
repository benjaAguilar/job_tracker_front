import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function Register() {
  return (
    <section className="flex items-center justify-center h-full p-7">
      <Card className="w-2xl p-3">
        <form>
          <FieldGroup className="flex flex-col items-center justify-center gap-0 mb-7">
            <FieldLegend className="">Register on Tracki'n</FieldLegend>
            <FieldDescription>
              Create a user to start tracking your job applications like a pro
              😎
            </FieldDescription>
          </FieldGroup>
          <FieldGroup className="grid grid-cols-1 md:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="username">Username</FieldLabel>
              <Input
                type="text"
                id="username"
                placeholder="pickle_rick"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                type="email"
                id="email"
                placeholder="pickle@gmail.com"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input type="password" id="password" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="r_password">Repeat password</FieldLabel>
              <Input type="password" id="r_password" required />
            </Field>
            <Button type="submit" className="col-start-1 md:col-start-2">
              Register
            </Button>
          </FieldGroup>
        </form>
      </Card>
    </section>
  );
}
