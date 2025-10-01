import { Button } from "@/views/components/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/views/components/popover";
import { Calendar } from "./calendar";
import { CalendarIcon } from "lucide-react";
import { Error } from "./error";
import { formatDate } from "@/app/utils/format-date";

interface IDatePickerInput {
  error?: string;
  value: Date;
  onChange(): void;
}

export function DatePickerInput({ error, value, onChange }: IDatePickerInput) {
  return (
    <div>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start text-left font-normal"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {value ? formatDate(new Date(value)) : "Pick a date"}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            selected={value ? new Date(value) : undefined}
            onSelect={onChange}
            mode="single"
          />
        </PopoverContent>
      </Popover>

      <Error hasError={error} />
    </div>
  );
}
