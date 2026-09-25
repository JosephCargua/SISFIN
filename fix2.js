const fs = require('fs');
let code = fs.readFileSync('src/app/pages/register-payment/register-payment.component.ts', 'utf8');

const oldConstructor = /  constructor\([\s\S]*?  \) \{\}/;
const newConstructor = `  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private bankingService: BankingService,
    private personaService: PersonaService,
    private documentService: FinancialDocumentService,
    private documentConsultService: DocumentConsultService
  ) {}`;

code = code.replace(oldConstructor, newConstructor);

// Fix doc type in callback
code = code.replace(/next: \(doc\) =>/g, 'next: (doc: any) =>');

fs.writeFileSync('src/app/pages/register-payment/register-payment.component.ts', code);
