interface IErrorProps {
  hasError?: string;
}

export function Error({ hasError }: IErrorProps) {
  if (!hasError) return;
  return <span className="text-destructive text-xs">{hasError}</span>;
}
