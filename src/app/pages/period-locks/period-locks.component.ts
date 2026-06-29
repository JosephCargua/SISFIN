import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutomationService } from '../../core/services/automation.service';
import { PeriodLock, CreatePeriodLockDto } from '../../models/automation.model';

@Component({
  selector: 'app-period-locks',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './period-locks.component.html',
  styleUrl: './period-locks.component.scss',
})
export class PeriodLocksComponent implements OnInit {
  periodLocks: PeriodLock[] = [];
  showCreateForm = false;

  newLock: CreatePeriodLockDto = {
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
  };

  months = [
    { value: 1, name: 'Enero' },
    { value: 2, name: 'Febrero' },
    { value: 3, name: 'Marzo' },
    { value: 4, name: 'Abril' },
    { value: 5, name: 'Mayo' },
    { value: 6, name: 'Junio' },
    { value: 7, name: 'Julio' },
    { value: 8, name: 'Agosto' },
    { value: 9, name: 'Septiembre' },
    { value: 10, name: 'Octubre' },
    { value: 11, name: 'Noviembre' },
    { value: 12, name: 'Diciembre' },
  ];

  constructor(private automationService: AutomationService) {}

  ngOnInit() {
    this.loadPeriodLocks();
  }

  loadPeriodLocks() {
    this.automationService.getPeriodLocks().subscribe({
      next: (data) => {
        this.periodLocks = data;
      },
      error: (error) => {
        console.error('Error loading period locks:', error);
      },
    });
  }

  createLock() {
    this.automationService.createPeriodLock(this.newLock).subscribe({
      next: () => {
        alert('Período bloqueado exitosamente');
        this.showCreateForm = false;
        this.resetForm();
        this.loadPeriodLocks();
      },
      error: (error) => {
        alert(error.error?.message || 'Error al bloquear el período');
      },
    });
  }

  toggleLock(id: string) {
    import('sweetalert2').then(module => {
      const Swal = module.default;
      Swal.fire({
        title: '¿Está seguro de cambiar el estado del bloqueo?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, cambiar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.automationService.toggleLock(id).subscribe({
            next: () => {
              alert('Estado actualizado exitosamente');
              this.loadPeriodLocks();
            },
            error: (error) => {
              alert(error.error?.message || 'Error al actualizar el estado');
            },
          });
        }
      });
    });
  }

  resetForm() {
    this.newLock = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
    };
  }
}

