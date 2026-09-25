const fs = require('fs');
let code = fs.readFileSync('src/app/pages/register-payment/register-payment.component.ts', 'utf8');

const oldSub = /    this\.route\.queryParams\.subscribe\(qParams => \{[\s\S]*?      \}\r?\n    \}\);/;

const newSub = `    this.route.queryParams.subscribe(qParams => {
      const id = qParams['id'];
      if (id) {
        this.documentConsultService.getById(id).subscribe({
          next: (doc) => this.populateFromCrossing(doc),
          error: () => {
            this.documentService.getById(id).subscribe({
              next: (doc) => this.populateFromCrossing(doc),
              error: () => {}
            });
          }
        });
      } else if (qParams['document']) {
        this.transactionType = 'Pago';
        this.previousTransactionType = 'Pago';
        if (qParams['personId']) {
          this.selectedPersonId = qParams['personId'];
          this.personaService.getPersona(this.selectedPersonId).subscribe({
             next: (p) => {
                if (p) this.personSearch = p.nombre || '';
             }
          });
        }
        this.documents = [{
          documentLabel: qParams['document'],
          issueDate: this.issueDate,
          type: 'Factura',
          value: Number(qParams['amount']) || 0,
          balance: Number(qParams['amount']) || 0,
          amountToPay: Number(qParams['amount']) || 0
        }];
        this.onDocumentLabelChange(this.documents[0]);
        this.recalcTotal();
      }
    });`;

code = code.replace(oldSub, newSub);

const popMethod = `
  populateFromCrossing(doc: any) {
    this.transactionType = 'Pago';
    this.previousTransactionType = 'Pago';
    this.personSearch = doc.personName || doc.supplierName || '';
    if (doc.personId) this.selectedPersonId = doc.personId;
    
    const cat = doc.documentCategory === 'INVOICE' || doc.documentTypeCode === '01' ? 'FAC' : 'DOC';
    const documentLabel = cat + ' ' + doc.documentNumber;
    
    const prevPaid = Number(doc.amountPaid) || 0;
    const value = Number(doc.total) || 0;
    const balance = Math.max(0, value - prevPaid);
    
    this.documents = [{
      documentLabel: documentLabel,
      issueDate: doc.issueDate || this.issueDate,
      type: cat === 'FAC' ? 'Factura' : 'Documento',
      value: value,
      balance: balance,
      amountToPay: balance
    }];
    this.recalcTotal();
  }

  loadTransactionForEditing`;

code = code.replace('  loadTransactionForEditing', popMethod);

fs.writeFileSync('src/app/pages/register-payment/register-payment.component.ts', code);
console.log('Script completed');
