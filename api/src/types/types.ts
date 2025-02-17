export type ResponseData<T> = {
  success: boolean;
  data: T;
};

export type ErrorResponse = {
  success: boolean;
  error: string;
};
