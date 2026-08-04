import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonaService } from '../../core/services/persona.service';
import { Persona } from '../../models/persona.model';

@Component({
  selector: 'app-persona-selector-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './persona-selector-modal.component.html',
  styleUrl: './persona-selector-modal.component.scss'
})
export class PersonaSelectorModalComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Output() personaSelected = new EventEmitter<Persona>();
  @Output() close = new EventEmitter<void>();

  filterText: string = '';
  personas: Persona[] = [];
  filteredPersonas: Persona[] = [];

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.loadPersonas();
  }

  loadPersonas() {
    this.personaService.getPersonas().subscribe({
      next: (data: Persona[]) => {
        this.personas = data;
        this.filteredPersonas = [...this.personas];
      },
      error: (err: any) => console.error('Failed to load personas for modal', err)
    });
  }

  search() {
    if (!this.filterText.trim()) {
      this.filteredPersonas = [...this.personas];
      return;
    }
    const term = this.filterText.toLowerCase();
    this.filteredPersonas = this.personas.filter(p => 
      p.nombre.toLowerCase().includes(term) || 
      (p.ruc && p.ruc.toLowerCase().includes(term)) ||
      (p.cedula && p.cedula.toLowerCase().includes(term))
    );
  }

  selectPersona(persona: Persona) {
    this.personaSelected.emit(persona);
    this.closeModal();
  }

  closeModal() {
    this.close.emit();
  }
}
