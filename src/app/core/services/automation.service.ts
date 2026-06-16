import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import {
  CostCenter,
  PeriodLock,
  CreateCostCenterDto,
  CreatePeriodLockDto,
} from '../../models/automation.model';

@Injectable({
  providedIn: 'root',
})
export class AutomationService {
  constructor(private api: ApiService) {}

  getCostCenters(): Observable<CostCenter[]> {
    return this.api.get<CostCenter[]>('cost-centers');
  }

  getCostCentersHierarchy(): Observable<CostCenter[]> {
    return this.api.get<CostCenter[]>('cost-centers/hierarchy');
  }

  createCostCenter(costCenter: CreateCostCenterDto): Observable<CostCenter> {
    return this.api.post<CostCenter>('cost-centers', costCenter);
  }

  getPeriodLocks(): Observable<PeriodLock[]> {
    return this.api.get<PeriodLock[]>('period-locks');
  }

  createPeriodLock(lock: CreatePeriodLockDto): Observable<PeriodLock> {
    return this.api.post<PeriodLock>('period-locks', lock);
  }

  toggleLock(id: string): Observable<PeriodLock> {
    return this.api.patch<PeriodLock>(`period-locks/${id}/toggle`, {});
  }
}

