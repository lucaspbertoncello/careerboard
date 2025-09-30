import { NumericFormat } from "react-number-format";
import { cn } from "@/app/lib/cn";

interface IInputCurrencyProps {
  onChange(value: string): void;
  value?: string;
  error?: string;
}

export function InputCurrency({
  onChange,
  value,
  error = "",
}: IInputCurrencyProps) {
  return (
    <div>
      <NumericFormat
        thousandSeparator=","
        decimalSeparator="."
        prefix="$"
        decimalScale={2}
        value={value}
        allowNegative={false}
        placeholder="$0.00"
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-12 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        )}
      />

      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
}
