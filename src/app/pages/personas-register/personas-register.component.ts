import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaService } from '../../core/services/persona.service';
import { Persona } from '../../models/persona.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personas-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personas-register.component.html',
  styleUrls: ['./personas-register.component.scss']
})
export class PersonasRegisterComponent implements OnInit {
  isEditing = false;
  activeTab = 'datos-generales';

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
  cuentasContables = [{id: '1', name: 'Cuenta de Prueba'}];
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
}
