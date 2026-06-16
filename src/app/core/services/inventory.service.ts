import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import {
  Product,
  InventoryMovement,
  CreateProductDto,
  CreateInventoryMovementDto,
} from '../../models/inventory.model';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(private api: ApiService) {}

  getProducts(): Observable<Product[]> {
    return this.api.get<Product[]>('products');
  }

  getProductById(id: string): Observable<Product> {
    return this.api.get<Product>(`products/${id}`);
  }

  createProduct(product: CreateProductDto): Observable<Product> {
    return this.api.post<Product>('products', product);
  }

  getMovements(productId?: string): Observable<InventoryMovement[]> {
    const endpoint = productId
      ? `inventory-movements?productId=${productId}`
      : 'inventory-movements';
    return this.api.get<InventoryMovement[]>(endpoint);
  }

  createMovement(movement: CreateInventoryMovementDto): Observable<InventoryMovement> {
    return this.api.post<InventoryMovement>('inventory-movements', movement);
  }
}

