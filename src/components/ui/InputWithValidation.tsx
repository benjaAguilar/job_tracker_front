import type { InputValidator } from "@/lib/validateInput";
import { Input } from "./input";
import {
  useState,
  type ComponentPropsWithoutRef,
  type Dispatch,
  type SetStateAction,
} from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

interface Props extends ComponentPropsWithoutRef<typeof Input> {
  validations: InputValidator;
  setValidationMessages: Dispatch<SetStateAction<string[]>>;
  passwordInput?: string;
}

export function InputWithValidation({
  validations,
  setValidationMessages,
  passwordInput,
  className,
  onChange,
  ...props
}: Props) {
  const [validationArr, setValidationArr] = useState<string[]>([]);
  const hasErrors = validationArr.length >= 1;
  const style = hasErrors
    ? "border-destructive focus-visible:border-destructive"
    : "";

  //TODO: we can check for a toast to execute errors on submit

  return (
    <>
      <div className="w-full h-6">
        {hasErrors ? (
          <Tooltip>
            <TooltipTrigger className="w-full flex">
              <span className="underline text-destructive text-xs m-0.5">
                {validationArr.length === 1
                  ? validationArr[0]
                  : `${validationArr[0].slice(0, 30)}...more`}
              </span>
            </TooltipTrigger>
            <TooltipContent className="flex flex-col items-center justify-center">
              {validationArr.map((val) => (
                <span key={val} className="text-xs">
                  {val}
                </span>
              ))}
            </TooltipContent>
          </Tooltip>
        ) : null}
      </div>
      <Input
        {...props}
        onChange={(e) => {
          const res = validations.validate(
            e.target.value,
            passwordInput ? passwordInput : e.target.name,
          );
          setValidationArr(res);
          setValidationMessages(res);
          onChange?.(e);
        }}
        className={`${className ?? ""} border-2 ${style}`}
      />
    </>
  );
}
