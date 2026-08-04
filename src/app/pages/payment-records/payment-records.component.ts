import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { Router } from '@angular/router';
import { PersonaSelectorModalComponent } from '../../components/persona-selector-modal/persona-selector-modal.component';
import { Persona } from '../../models/persona.model';

@Component({
  selector: 'app-payment-records',
  standalone: true,
  imports: [CommonModule, FormsModule, PersonaSelectorModalComponent],
  templateUrl: './payment-records.component.html',
  styleUrls: ['./payment-records.component.scss']
})
export class PaymentRecordsComponent implements OnInit {
  payments: any[] = [];
  loading = false;
  showPersonaModal = false;
  showActionMenu = false;
  
  filters = {
    documento: '',
    comprobante: '',
    anticipo: '',
    persona: '',
    cheque: '',
    postfechados: false,
    centroCosto: '',
    reposicionado: 'Todos',
    desde: '',
    hasta: '',
    fechaCheque: '',
    tipo: 'Todos'
  };

  toggleActionMenu() {
    this.showActionMenu = !this.showActionMenu;
  }

  navigateToAdd(type: string) {
    this.showActionMenu = false;
    if (type === 'pago') {
      this.router.navigate(['/register-payment']);
    } else if (type === 'masivo') {
      this.router.navigate(['/register-mass-payment']);
    } else if (type === 'cruce') {
      this.router.navigate(['/document-crossing']);
    }
  }

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.loadPayments();
  }

  loadPayments() {
    this.loading = true;
    
    // Convert GET params
    let queryParams = '?';
    if (this.filters.tipo !== 'Todos') queryParams += `tipo=${this.filters.tipo}&`;
    if (this.filters.desde) queryParams += `desde=${this.filters.desde}&`;
    if (this.filters.hasta) queryParams += `hasta=${this.filters.hasta}&`;
    
    this.apiService.get<any[]>(`cobros-pagos${queryParams}`).subscribe({
      next: (data) => {
        this.payments = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching payments:', err);
        this.loading = false;
      }
    });
  }

  search() {
    this.loadPayments();
  }

  formatCurrency(amount: number): string {
    if (amount === undefined || amount === null || isNaN(amount)) return '$0.00';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(amount);
  }

  openPersonaModal() {
    this.showPersonaModal = true;
  }

  onPersonaSelected(persona: Persona) {
    this.filters.persona = persona.nombre;
  }
}
