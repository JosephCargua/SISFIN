import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InventoryService } from '../../core/services/inventory.service';
import {
  Product,
  InventoryMovement,
  CreateProductDto,
  CreateInventoryMovementDto,
} from '../../models/inventory.model';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss',
})
export class InventoryComponent implements OnInit {
  products: Product[] = [];
  movements: InventoryMovement[] = [];
  showProductForm = false;
  showMovementForm = false;
  selectedProductId = '';

  newProduct: CreateProductDto = {
    code: '',
    name: '',
    unit: 'UN',
    initialStock: 0,
    initialCost: 0,
  };

  newMovement: CreateInventoryMovementDto = {
    productId: '',
    type: 'IN',
    quantity: 0,
    unitCost: 0,
    date: new Date().toISOString().split('T')[0],
  };

  constructor(private inventoryService: InventoryService) {}

  ngOnInit() {
    this.loadProducts();
    this.loadMovements();
  }

  loadProducts() {
    this.inventoryService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (error) => {
        console.error('Error loading products:', error);
      },
    });
  }

  loadMovements() {
    this.inventoryService.getMovements(this.selectedProductId || undefined).subscribe({
      next: (data) => {
        this.movements = data;
      },
      error: (error) => {
        console.error('Error loading movements:', error);
      },
    });
  }

  createProduct() {
    this.inventoryService.createProduct(this.newProduct).subscribe({
      next: () => {
        alert('Producto creado exitosamente');
        this.showProductForm = false;
        this.resetProductForm();
        this.loadProducts();
      },
      error: (error) => {
        alert(error.error?.message || 'Error al crear el producto');
      },
    });
  }

  createMovement() {
    this.inventoryService.createMovement(this.newMovement).subscribe({
      next: () => {
        alert('Movimiento creado exitosamente');
        this.showMovementForm = false;
        this.resetMovementForm();
        this.loadMovements();
        this.loadProducts();
      },
      error: (error) => {
        alert(error.error?.message || 'Error al crear el movimiento');
      },
    });
  }

  resetProductForm() {
    this.newProduct = {
      code: '',
      name: '',
      unit: 'UN',
      initialStock: 0,
      initialCost: 0,
    };
  }

  resetMovementForm() {
    this.newMovement = {
      productId: '',
      type: 'IN',
      quantity: 0,
      unitCost: 0,
      date: new Date().toISOString().split('T')[0],
    };
  }

  onProductFilterChange() {
    this.loadMovements();
  }
}

