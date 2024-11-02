export enum API_STATUS {
  LOADING,
  SUCCESS,
  ERROR,
  IDLE,
}

export type ApiError = {
  errorCode: number;
  errorMessage: string;
};

export type ApiRespStatus = {
  responseCode: number;
  responseAddnMessage?: string;
};

export type ApiState = {
  status: API_STATUS;
  error?: ApiError;
  responseStatus?: ApiRespStatus;
};
