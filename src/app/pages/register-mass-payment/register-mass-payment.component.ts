import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BankingService } from '../../core/services/banking.service';
import Swal from 'sweetalert2';
import { PersonaSelectorModalComponent } from '../../components/persona-selector-modal/persona-selector-modal.component';
import { Persona } from '../../models/persona.model';

@Component({
  selector: 'app-register-mass-payment',
    this.isAnnulled = false;
    this.documents = [];
    this.total = 0;
  }

  save() {
    if (this.total <= 0 && this.documents.length > 0) {
      Swal.fire('Error', 'El monto a pagar total debe ser mayor a 0', 'warning');
      return;
    }

    if (this.documents.length === 0) {
      Swal.fire('Error', 'Debe agregar al menos un documento al detalle', 'warning');
      return;
    }

    this.saving = true;

    const payload: any = {
      bankAccountId: this.bankAccount || null,
      date: this.issueDate,
      description: this.description,
      amount: this.total,
      type: this.transactionType === 'Pago' ? 'Egreso' : 'Ingreso',
      transactionType: 'Cobro/Pago Masivo',
      paymentMethod: this.paymentMethod,
      payToOrderOf: this.payToOrderOf,
      checkNumber: this.checkNumber,
      checkDate: this.checkDate,
      isAnnulled: this.isAnnulled,
      details: this.documents.map(d => ({
        accountName: d.documentLabel || 'S/N', // For backwards compatibility if needed
        amount: d.amountToPay,
        costCenter: 'N/A',
        
        personaId: d.personaId || null,
        personName: d.personName || null,
        documentNumber: d.documentLabel || null,
        documentType: d.type || null,
        documentIssueDate: d.issueDate || null
      }))
    };

    this.bankingService.createTransaction(payload).subscribe({
      next: () => {
        Swal.fire('Éxito', 'Pago masivo guardado correctamente', 'success').then(() => {
          this.router.navigate(['/payment-records']);
        });
        this.saving = false;
      },
      error: () => {
        Swal.fire('Error', 'Hubo un problema al guardar', 'error');
        this.saving = false;
      }
    });
  }
}
