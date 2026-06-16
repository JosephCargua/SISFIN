import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaxService } from '../../core/services/tax.service';
import { Retention, CreateRetentionDto } from '../../models/tax.model';

@Component({
  selector: 'app-retentions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './retentions.component.html',
  styleUrl: './retentions.component.scss',
})
export class RetentionsComponent implements OnInit {
  retentions: Retention[] = [];
  showCreateForm = false;

  newRetention: CreateRetentionDto = {
    issueDate: new Date().toISOString().split('T')[0],
    supplierIdentification: '',
    supplierName: '',
    retentionCode: '312',
    retentionBase: 0,
    retentionPercentage: 0,
  };

  retentionCodes = [
    { code: '312', name: 'Renta - Servicios Profesionales' },
    { code: '344', name: 'Renta - Arrendamientos' },
    { code: '401', name: 'IVA - Servicios' },
  ];

  constructor(private taxService: TaxService) {}

  ngOnInit() {
    this.loadRetentions();
  }

  loadRetentions() {
    this.taxService.getRetentions().subscribe({
      next: (data) => {
        this.retentions = data;
      },
      error: (error) => {
        console.error('Error loading retentions:', error);
      },
    });
  }

  createRetention() {
    this.taxService.createRetention(this.newRetention).subscribe({
      next: () => {
        alert('Retención creada exitosamente');
        this.showCreateForm = false;
        this.resetForm();
        this.loadRetentions();
      },
      error: (error) => {
        alert(error.error?.message || 'Error al crear la retención');
      },
    });
  }

  resetForm() {
    this.newRetention = {
      issueDate: new Date().toISOString().split('T')[0],
      supplierIdentification: '',
      supplierName: '',
      retentionCode: '312',
      retentionBase: 0,
      retentionPercentage: 0,
    };
  }

  calculateRetentionAmount(): number {
    return (this.newRetention.retentionBase * this.newRetention.retentionPercentage) / 100;
  }
}

