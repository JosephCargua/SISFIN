import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaService } from '../../core/services/persona.service';
import { Persona } from '../../models/persona.model';
import Swal from 'sweetalert2';

import { AccountSelectorModalComponent } from '../../components/account-selector-modal/account-selector-modal.component';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-personas-register',
  standalone: true,
  imports: [CommonModule, FormsModule, AccountSelectorModalComponent],
  templateUrl: './personas-register.component.html',
  styleUrls: ['./personas-register.component.scss']
})
export class PersonasRegisterComponent implements OnInit {
  isEditing = false;
  activeTab = 'datos-generales';

  isAccountModalVisible = false;
  currentAccountField = '';
  accountNames: { [key: string]: string } = {};

  persona: Persona = {
    estado: 'Activo',
    tipo: 'Natural',
    contribuyenteEspecial: false,
    nombre: '',
    extranjero: false,
    esCliente: false,
    esProveedor: false,
    esEmpleado: false,
    esAccionista: false,
    esVendedor: false,
    cliParaExportacion: false,
    cliCupoCredito: false,
    provCtaRelacionada: false,
    provArtesano: false,
    autorizacionesSri: []
  };

  // Mock data for dropdowns
  bancos = [{id: '1', name: 'Banco Internacional'}];
  vendedores = [{id: '1', name: 'Vendedor 1'}];

  constructor(
    private personaService: PersonaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.personaService.getPersona(id).subscribe({
        next: (data) => this.persona = data,
        error: () => Swal.fire('Error', 'No se pudo cargar la persona', 'error')
      });
    }
  }

  save(): void {
    if (this.isEditing && this.persona.id) {
      this.personaService.updatePersona(this.persona.id, this.persona).subscribe({
        next: () => {
          Swal.fire('Guardado', 'Persona actualizada con éxito', 'success');
          this.router.navigate(['/personas']);
        },
        error: () => Swal.fire('Error', 'No se pudo actualizar', 'error')
      });
    } else {
      this.personaService.createPersona(this.persona).subscribe({
        next: () => {
          Swal.fire('Creado', 'Persona registrada con éxito', 'success');
          this.router.navigate(['/personas']);
        },
        error: () => Swal.fire('Error', 'No se pudo registrar', 'error')
      });
    }
  }

  addAutorizacion(): void {
    if (!this.persona.autorizacionesSri) {
      this.persona.autorizacionesSri = [];
    }
    this.persona.autorizacionesSri.push({
      autorizacion: '',
      tipoComprobante: 'Venta',
      serieInicio: '',
      serieFin: '',
      fechaInicio: '',
      fechaFin: ''
    });
  }

  removeAutorizacion(index: number): void {
    if (this.persona.autorizacionesSri) {
      this.persona.autorizacionesSri.splice(index, 1);
    }
  }

  openAccountModal(field: string): void {
    this.currentAccountField = field;
    this.isAccountModalVisible = true;
  }

  onAccountSelected(account: Account): void {
    (this.persona as any)[this.currentAccountField] = account.id;
    this.accountNames[this.currentAccountField] = account.name;
  }
}
