import { capitalizeFirstLetter } from "@/app/utils/capitalize-first-letter";
import { Error } from "./error";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

interface ISelectInputProps {
  error?: string;
  triggerPlaceholder: string;
  data: string[];
  value: string;
  onChange(): void;
}

export function SelectInput({
  error,
  triggerPlaceholder,
  data,
  value,
  onChange,
}: ISelectInputProps) {
  return (
    <div>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={triggerPlaceholder} />
        </SelectTrigger>

        <SelectContent>
          {data.map((item) => (
            <SelectItem value={item}>{capitalizeFirstLetter(item)}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Error hasError={error} />
    </div>
  );
}
