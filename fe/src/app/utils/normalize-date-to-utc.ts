export function normalizeDateToUTC(date: Date): string {
  const utcDate = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
  );

  return utcDate.toISOString();
}
