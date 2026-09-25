const fs = require('fs');
const path = 'c:\\Users\\johac\\OneDrive\\Desktop\\Carpetas varias\\SISFIN\\SISFIN\\src\\app\\pages\\register-payment\\register-payment.component.ts';
let code = fs.readFileSync(path, 'utf8');

const regex = /this\.personaService\.searchPersonas\(''\)\.subscribe\(personas => \{\s+const p = personas\.find\(x => x\.id === this\.selectedPersonId\);\s+if \(p\) this\.personSearch = p\.razonSocial \|\| p\.nombres;\s+\}\);/g;

const replacement = `this.personaService.getPersona(this.selectedPersonId).subscribe({
             next: (p) => {
                if (p) this.personSearch = p.razonSocial || p.nombres || p.nombre || '';
             }
          });`;

if (regex.test(code)) {
    code = code.replace(regex, replacement);
    fs.writeFileSync(path, code, 'utf8');
    console.log('Replaced successfully');
} else {
    console.log('Regex target not found!');
}
