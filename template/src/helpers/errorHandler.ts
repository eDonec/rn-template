import { AxiosError } from 'axios';
import { isAxiosError } from 'models/typeguards/axiosTypeGuard';
import { showToast } from './showToast';

export const errorHandler = (error: AxiosError | Error): void => {
  if (isAxiosError(error)) {
    showToast(
      typeof error.response?.data === 'string'
        ? error.response.data
        : error.response?.data.message,
      'DANGER',
    );
  } else {
    showToast(error.message, 'DANGER');
  }
};
