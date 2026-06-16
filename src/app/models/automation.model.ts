export interface CostCenter {
  id: string;
  code: string;
  name: string;
  description: string | null;
  parentId: string | null;
  parent?: CostCenter;
  children?: CostCenter[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface PeriodLock {
  id: string;
  year: number;
  month: number;
  isLocked: boolean;
  lockedAt: Date | null;
  lockedBy: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateCostCenterDto {
  code: string;
  name: string;
  description?: string;
  parentId?: string | null;
}

export interface CreatePeriodLockDto {
  year: number;
  month: number;
}

