import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
})
export class ReportsComponent implements OnInit {
  reportType = 'balance-sheet';
  date = new Date().toISOString().split('T')[0];
  startDate = new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0];
  endDate = new Date().toISOString().split('T')[0];

  signatures = {
    row1: [
      {
        name: 'Hno. Miguel Angel Cargua',
        role: 'PRESIDENTE',
        org: 'MOVIMIENTO JUAN XXIII',
        location: 'VICARIATO DE PUYO',
      },
      {
        name: 'Ing. Daniela Reyes D.',
        role: 'CONTADORA',
        org: 'MOVIMIENTO JUAN XXIII',
        location: 'VICARIATO DE PUYO',
      },
    ],
    row2: [
      {
        name: 'Hermana Leonor Torres',
        role: 'ECONOMA',
        org: 'MOVIMIENTO JUAN XXIII',
        location: 'VICARIATO DE PUYO',
      },
      {
        name: 'Padre. Jose Castillo',
        role: 'GUIA ESPIRITUAL DEL MOVIMIENTO JUAN XXIII- VAP',
        org: '',
        location: '',
      },
      {
        name: 'Mons. Rafael Cob Garcia',
        role: 'OBISPO DEL VAP',
        org: '',
        location: '',
      },
    ],
  };

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    const type = this.route.snapshot.queryParamMap.get('type');
    if (type === 'balance-sheet' || type === 'income-statement') {
      this.reportType = type;
    }
  }

  downloadPDF() {
    let endpoint = '';
    let params: any = {};

    if (this.reportType === 'balance-sheet') {
      endpoint = 'reports/balance-sheet/pdf';
      params = { date: this.date };
    } else if (this.reportType === 'income-statement') {
      endpoint = 'reports/income-statement/pdf';
      params = { 
        startDate: this.startDate, 
        endDate: this.endDate,
        signatures: JSON.stringify(this.signatures)
      };
    }

    this.api.downloadFile(endpoint, params).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.reportType}-${this.date}.pdf`;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (error) => {
        alert('Error al generar el reporte');
      },
    });
  }

  downloadExcel() {
    let endpoint = '';
    let params: any = {};

    if (this.reportType === 'balance-sheet') {
      endpoint = 'reports/balance-sheet/excel';
      params = { date: this.date };
    } else if (this.reportType === 'income-statement') {
      endpoint = 'reports/income-statement/excel';
      params = { startDate: this.startDate, endDate: this.endDate };
    }

    this.api.downloadFile(endpoint, params).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.reportType}-${this.date}.xlsx`;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: (error) => {
        alert('Error al generar el reporte');
      },
    });
  }
}

