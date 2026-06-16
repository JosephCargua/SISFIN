import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutomationService } from '../../core/services/automation.service';
import { CostCenter, CreateCostCenterDto } from '../../models/automation.model';

@Component({
  selector: 'app-cost-centers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cost-centers.component.html',
  styleUrl: './cost-centers.component.scss',
})
export class CostCentersComponent implements OnInit {
  costCenters: CostCenter[] = [];
  costCentersHierarchy: CostCenter[] = [];
  showCreateForm = false;

  newCostCenter: CreateCostCenterDto = {
    code: '',
    name: '',
    parentId: null,
  };

  constructor(private automationService: AutomationService) {}

  ngOnInit() {
    this.loadCostCenters();
    this.loadHierarchy();
  }

  loadCostCenters() {
    this.automationService.getCostCenters().subscribe({
      next: (data) => {
        this.costCenters = data;
      },
      error: (error) => {
        console.error('Error loading cost centers:', error);
      },
    });
  }

  loadHierarchy() {
    this.automationService.getCostCentersHierarchy().subscribe({
      next: (data) => {
        this.costCentersHierarchy = data;
      },
      error: (error) => {
        console.error('Error loading hierarchy:', error);
      },
    });
  }

  createCostCenter() {
    this.automationService.createCostCenter(this.newCostCenter).subscribe({
      next: () => {
        alert('Centro de Costo creado exitosamente');
        this.showCreateForm = false;
        this.resetForm();
        this.loadCostCenters();
        this.loadHierarchy();
      },
      error: (error) => {
        alert(error.error?.message || 'Error al crear el centro de costo');
      },
    });
  }

  resetForm() {
    this.newCostCenter = {
      code: '',
      name: '',
      parentId: null,
    };
  }
}

