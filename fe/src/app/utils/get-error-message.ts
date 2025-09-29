export function getErrorMessage(error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
  return error?.response?.data?.message ?? "Something went wrong";
}
