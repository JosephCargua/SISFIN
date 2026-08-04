import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaService } from '../../core/services/persona.service';
import { Persona } from '../../models/persona.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-personas-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personas-list.component.html',
  styleUrls: ['./personas-list.component.scss']
})
export class PersonasListComponent implements OnInit {
  personas: Persona[] = [];
  
  // Filters
  filtro: string = '';
  rolFilter: string = 'Todos';
  estadoFilter: string = 'Todos';

  constructor(
    private personaService: PersonaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPersonas();
  }

  loadPersonas(): void {
    this.personaService.getPersonas(this.filtro, this.estadoFilter, this.rolFilter).subscribe({
      next: (data) => {
        this.personas = data;
      },
      error: (error) => {
        console.error('Error loading personas:', error);
        Swal.fire('Error', 'No se pudieron cargar las personas', 'error');
      }
    });
  }

  onSearch(): void {
    this.loadPersonas();
  }

  goToRegister(): void {
    this.router.navigate(['/personas-register']);
  }

  editPersona(id: string): void {
    this.router.navigate(['/personas-register', id]);
  }

  deletePersona(id: string): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'La persona será marcada como Inactiva',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, inactivar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.personaService.deletePersona(id).subscribe({
          next: () => {
            Swal.fire('Inactivado!', 'La persona ha sido inactivada.', 'success');
            this.loadPersonas();
          },
          error: (error) => {
            console.error('Error inactivando persona:', error);
            Swal.fire('Error', 'No se pudo inactivar la persona', 'error');
          }
        });
      }
    });
  }

  getRoles(persona: Persona): string {
    const roles = [];
    if (persona.esCliente) roles.push('Cliente');
    if (persona.esProveedor) roles.push('Proveedor');
    if (persona.esEmpleado) roles.push('Empleado');
    if (persona.esAccionista) roles.push('Accionista');
    if (persona.esVendedor) roles.push('Vendedor');
    return roles.join(' - ');
  }
}
