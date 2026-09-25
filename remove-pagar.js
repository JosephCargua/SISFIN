const fs = require('fs');

function removeHtml() {
    const path = 'c:\\Users\\johac\\OneDrive\\Desktop\\Carpetas varias\\SISFIN\\SISFIN\\src\\app\\pages\\consult-documents\\consult-documents.component.html';
    let code = fs.readFileSync(path, 'utf8');
    const regex = /\s*<a class="dropdown-item"\s+\*ngIf="!doc\.isPaid"[\s\S]*?\(click\)="pagarDocumento\(doc\);\s+activeDropdown = null">Pagar Documento<\/a>/;
    if (regex.test(code)) {
        code = code.replace(regex, '');
        fs.writeFileSync(path, code, 'utf8');
        console.log('Removed from HTML');
    } else {
        console.log('HTML target not found');
    }
}

function removeTs() {
    const path = 'c:\\Users\\johac\\OneDrive\\Desktop\\Carpetas varias\\SISFIN\\SISFIN\\src\\app\\pages\\consult-documents\\consult-documents.component.ts';
    let code = fs.readFileSync(path, 'utf8');
    const regex = /\s*pagarDocumento\(doc: any\) {[\s\S]*?this\.router\.navigate\(\['\/register-payment'\], \{ queryParams: \{ document: doc\.documentNumber \|\| doc\.documentId, amount: doc\.total, personId: doc\.personId \|\| doc\.supplierId \} \}\);\s*}/;
    if (regex.test(code)) {
        code = code.replace(regex, '');
        fs.writeFileSync(path, code, 'utf8');
        console.log('Removed from TS');
    } else {
        console.log('TS target not found, trying fallback regex');
        const fallback = /\s*pagarDocumento\(doc: any\) {[\s\S]*?this\.router\.navigate\(\['\/register-payment'\][^}]+\};\s*}/;
        if(fallback.test(code)) {
             code = code.replace(fallback, '');
             fs.writeFileSync(path, code, 'utf8');
             console.log('Removed from TS via fallback');
        } else {
             console.log('TS fallback also failed');
        }
    }
}

removeHtml();
removeTs();
