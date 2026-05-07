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

export function Register() {
  const [validation, setValidations] = useState<string[]>([]);

  return (
    <section className="flex items-center justify-center h-full p-7">
      <Card className="w-2xl p-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (validation.length >= 1) return alert("complete the fields");
          }}
        >
          <FieldGroup className="flex flex-col items-center justify-center gap-0 mb-7">
            <FieldLegend className="font-heading">
              Register on Tracki'n
            </FieldLegend>
            <FieldDescription>
              Create a user to start tracking your job applications like a pro
              😎
            </FieldDescription>
          </FieldGroup>
          <FieldGroup className="grid grid-cols-1 md:grid-cols-2">
            <Field className="gap-0">
              <FieldLabel htmlFor="username" className="m-0">
                Username
              </FieldLabel>
              <InputWithValidation
                type="text"
                id="username"
                name="username"
                placeholder="pickle_rick"
                validations={new InputValidatorBuilder()
                  .setNotEmpty()
                  .setLength(4, 30)
                  .setIsAlphaNumeric()
                  .build()}
                setValidationMessages={setValidations}
              />
            </Field>
            <Field className="gap-0">
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <InputWithValidation
                type="email"
                id="email"
                name="email"
                placeholder="pickle@gmail.com"
                validations={new InputValidatorBuilder()
                  .setNotEmpty()
                  .setIsEmail()
                  .build()}
                setValidationMessages={setValidations}
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
