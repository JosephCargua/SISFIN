const fs = require('fs');

function fixFile(path) {
    let code = fs.readFileSync(path, 'utf8');
    const oldMethod = `  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }`;

    const oldMethod2 = `  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
  }`;

    const replacement = `  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const str = typeof dateStr === 'string' ? dateStr : new Date(dateStr).toISOString();
    const part = str.split('T')[0];
    const [year, month, day] = part.split('-');
    return \`\${day}/\${month}/\${year}\`;
  }`;

    if (code.includes(oldMethod)) {
        code = code.replace(oldMethod, replacement);
        fs.writeFileSync(path, code, 'utf8');
        console.log('Replaced oldMethod in ' + path);
    } else if (code.includes(oldMethod2)) {
        code = code.replace(oldMethod2, replacement);
        fs.writeFileSync(path, code, 'utf8');
        console.log('Replaced oldMethod2 in ' + path);
    } else {
        // Just look for formatDate using regex and replace its block up to the FIRST closing brace
        const match = code.match(/formatDate\(dateStr: string\): string \{[^}]+\}/);
        if (match) {
            code = code.replace(match[0], replacement);
            fs.writeFileSync(path, code, 'utf8');
            console.log('Replaced using regex in ' + path);
        } else {
             console.log('Not found in ' + path);
        }
    }
}

fixFile('src/app/pages/bank-reconciliations/bank-reconciliations.component.ts');
fixFile('src/app/pages/register-reconciliation/register-reconciliation.component.ts');
