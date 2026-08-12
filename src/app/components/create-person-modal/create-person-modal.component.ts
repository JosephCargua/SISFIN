import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PayablesService } from '../../services/payables.service';
import { ReceivablesService } from '../../services/receivables.service';

@Component({
  selector: 'app-create-person-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-person-modal.component.html',
  styleUrl: './create-person-modal.component.scss'
})
export class CreatePersonModalComponent {
  @Input() isVisible = false;
  @Input() personType: 'CUSTOMER' | 'SUPPLIER' = 'CUSTOMER';
  @Input() prefillIdentification = '';
  @Input() prefillName = '';
  
  @Output() close = new EventEmitter<void>();
  @Output() personCreated = new EventEmitter<any>();

  identification = '';
  name = '';
  email = '';
  phone = '';
  address = '';
  saving = false;

  constructor(
    private payablesService: PayablesService,
    private receivablesService: ReceivablesService
  ) {}

  ngOnChanges() {
    if (this.isVisible) {
      this.identification = this.prefillIdentification || '';
      this.name = this.prefillName || '';
      this.email = '';
      this.phone = '';
      this.address = '';
    }
  }

  closeModal() {
    this.close.emit();
  }

  save() {
    if (!this.identification || !this.name) {
      alert('La identificación y el nombre son obligatorios');
      return;
    }

    this.saving = true;
    const payload = {
      identification: this.identification,
      name: this.name,
      email: this.email || undefined,
      phone: this.phone || undefined,
      address: this.address || undefined
    };

    if (this.personType === 'CUSTOMER') {
      this.receivablesService.createCustomer(payload).subscribe({
        next: (res: any) => {
          this.saving = false;
          this.personCreated.emit(res);
          this.closeModal();
        },
        error: (err: any) => {
          this.saving = false;
          alert('Error al crear cliente: ' + (err.error?.message || err.message));
        }
      });
    } else {
      this.payablesService.createSupplier(payload).subscribe({
        next: (res: any) => {
          this.saving = false;
          this.personCreated.emit(res);
          this.closeModal();
        },
        error: (err: any) => {
          this.saving = false;
          alert('Error al crear proveedor: ' + (err.error?.message || err.message));
        }
      });
    }
  }
}
