import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaxService } from '../../core/services/tax.service';
import { ATS } from '../../models/tax.model';

@Component({
  selector: 'app-ats',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ats.component.html',
  styleUrl: './ats.component.scss',
})
export class ATSComponent implements OnInit {
  atsList: ATS[] = [];
  selectedYear = new Date().getFullYear();
  selectedMonth = new Date().getMonth() + 1;
  loading = false;

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

  constructor(private taxService: TaxService) {}

  ngOnInit() {
    this.loadATS();
  }

  loadATS() {
    this.taxService.getATS(this.selectedYear, this.selectedMonth).subscribe({
      next: (data) => {
        this.atsList = data;
      },
      error: (error) => {
        console.error('Error loading ATS:', error);
      },
    });
  }

  generateATS() {
    this.loading = true;
    this.taxService.generateATS(this.selectedYear, this.selectedMonth).subscribe({
      next: () => {
        alert('ATS generado exitosamente');
        this.loading = false;
        this.loadATS();
      },
      error: (error) => {
        alert(error.error?.message || 'Error al generar el ATS');
        this.loading = false;
      },
    });
  }
}

