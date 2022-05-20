import { AxiosError } from 'axios';

export const isAxiosError = (
  error: Error | AxiosError,
): error is AxiosError<{ message: string } | string> =>
  (error as AxiosError).isAxiosError === true;
