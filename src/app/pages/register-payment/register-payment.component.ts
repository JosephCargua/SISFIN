import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-payment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-payment.component.html',
  styleUrl: './register-payment.component.scss'
})
export class RegisterPaymentComponent implements OnInit {
  isAnnulled = false;
  transactionType = 'Pago';
  paymentMethod = 'Cheque';
  paymentSubMethod = 'Cheque propio';
  issueDate = '2026-06-30';
  personName = '';
  payToOrderOf = '';
  bankAccount = '';
  checkNumber = '';
  checkDate = '';
  description = '';
  isCash = false; // EFECTIVO checkbox
  saving = false;

  documents: any[] = [];
  total = 0;

  get paymentMethods() {
    if (this.transactionType === 'Pago') {
      return ['Cheque', 'Transferencia', 'Caja Chica', 'Tarjeta de Crédito', 'Dinero electrónico'];
    } else {
      return ['Caja', 'Cheque', 'Transferencia'];
    }
  }

  onTransactionTypeChange() {
    if (this.transactionType === 'Pago') {
      this.paymentMethod = 'Cheque';
    } else {
      this.paymentMethod = 'Caja';
    }
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if (id) {
        // Load data based on ID
        this.personName = 'TRANSPORTES SACHA KASHA S.A.';
        this.payToOrderOf = 'TRANSPORTES SACHA KASHA S.A.';
        this.description = `Doc. 001-019-000000293, 019 1600489619001 Ruth Iveth Soria Castro TBC2819 CESLAO MARIN SECTOR LA Y papanguturismo@yahoo.es`;
        
        this.documents = [{
          documentLabel: 'FAC 001-019-000000293',
          issueDate: '30/06/2026',
          type: 'Factura',
          value: 30.0,
          balance: 0.0,
          amountToPay: 0.0
        }];
        this.recalcTotal();
      }
    });
  }

  recalcTotal() {
    this.total = this.documents.reduce((acc, doc) => acc + (doc.amountToPay || 0), 0);
  }

  save() {
    this.saving = true;
    setTimeout(() => {
      alert('Pago registrado correctamente');
      this.saving = false;
      this.router.navigate(['/consult-documents']);
    }, 1000);
  }
}
