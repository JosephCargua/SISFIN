import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-records',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment-records.component.html',
  styleUrl: './payment-records.component.scss'
})
export class PaymentRecordsComponent implements OnInit {
  payments: any[] = [];
  filteredPayments: any[] = [];
  loading = false;
  filterMethod = 'Todas';

  paymentMethods = ['Todas', 'Caja', 'Transferencia', 'Cheque', 'Tarjeta de Crédito', 'Dinero electrónico'];

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.loadPayments();
  }

  loadPayments() {
    this.loading = true;
    this.apiService.get<any[]>('document-payments').subscribe({
      next: (data) => {
        this.payments = data;
        this.applyFilter();
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching payments:', err);
        this.loading = false;
      }
    });
  }

  applyFilter() {
    if (this.filterMethod === 'Todas') {
      this.filteredPayments = this.payments;
    } else {
      this.filteredPayments = this.payments.filter(p => p.paymentMethod === this.filterMethod);
    }
  }

  viewDocument(id: string) {
    this.router.navigate(['/register-document'], { queryParams: { id } });
  }
}
