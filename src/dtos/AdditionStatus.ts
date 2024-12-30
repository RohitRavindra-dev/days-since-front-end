export enum UpdateStatus {
  IDLE = 'IDLE',
  IN_PROGRESS = 'IN_PROGRESS',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
}

export enum UpdateVariant {
  ADD_NEW = 'ADD_NEW',
  DELETE_EXISTING = 'DELETE_EXISTING',
  MODIFY_EXISTING = 'MODIFY_EXISTING',
}

export type UpdatePortfolio = {
  status: UpdateStatus;
  type: UpdateVariant | null;
  errorMessage?: string;
};
