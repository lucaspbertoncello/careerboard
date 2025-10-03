import type React from "react";
import { Input } from "./input";
import { Label } from "./label";
import { Error } from "./error";

interface InputWithLabelProps extends React.ComponentProps<"input"> {
  error?: string;
  labelText: string;
}

export function InputWithLabel({
  error = "",
  labelText,
  ...props
}: InputWithLabelProps) {
  return (
    <div>
      <div className="grid w-full max-w-sm items-center gap-2">
        <Label htmlFor={labelText}>{labelText}</Label>
        <Input {...props} id={labelText} />
      </div>

      <Error hasError={error} />
    </div>
  );
}
