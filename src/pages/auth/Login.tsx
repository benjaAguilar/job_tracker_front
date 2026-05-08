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
import { InputWithValidation } from "@/components/ui/InputWithValidation";
import { InputValidatorBuilder } from "@/lib/validateInput";
import { useState } from "react";

export function Login() {
  const [validation, setValidations] = useState<string[]>([]);

  return (
    <section className="flex items-center justify-center h-full p-7">
      <Card className="w-2xl p-3">
        <form>
          <FieldGroup className="flex flex-col items-center justify-center gap-0 mb-7">
            <FieldLegend className="">Login on Tracki'n</FieldLegend>
            <FieldDescription>Login to your account</FieldDescription>
          </FieldGroup>
          <FieldGroup className="grid grid-cols-1">
            <Field className="gap-0">
              <FieldLabel htmlFor="usernameOrEmail">
                Username or Email
              </FieldLabel>
              <InputWithValidation
                type="text"
                id="usernameOrEmail"
                name="usernameOrEmail"
                placeholder="picklerick33"
                validations={new InputValidatorBuilder()
                  .setNotEmpty()
                  .setLength(4, 100)
                  .build()}
                setValidationMessages={setValidations}
              />
            </Field>
            <Field className="gap-0">
              <FieldLabel htmlFor="password">Password</FieldLabel>
              <InputWithValidation
                type="password"
                id="password"
                name="password"
                validations={new InputValidatorBuilder().setNotEmpty().build()}
                setValidationMessages={setValidations}
              />
            </Field>
            <Button type="submit">Login</Button>
          </FieldGroup>
        </form>
      </Card>
    </section>
  );
}
