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

export function Login() {
  return (
    <section className="flex items-center justify-center h-full p-7">
      <Card className="w-2xl p-3">
        <form>
          <FieldGroup className="flex flex-col items-center justify-center gap-0 mb-7">
            <FieldLegend className="">Login on Tracki'n</FieldLegend>
            <FieldDescription>Login to your account</FieldDescription>
          </FieldGroup>
          <FieldGroup className="grid grid-cols-1">
            <Field>
              <FieldLabel htmlFor="usernameOrEmail">
                Username or Email
              </FieldLabel>
              <Input
                type="text"
                id="usernameOrEmail"
                placeholder="pickle_rick"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <Input type="password" id="password" required />
            </Field>
            <Button type="submit">Login</Button>
          </FieldGroup>
        </form>
      </Card>
    </section>
  );
}
