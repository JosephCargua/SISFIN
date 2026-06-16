export interface Product {
  id: string;
  code: string;
  name: string;
  description: string | null;
  unit: string;
  currentStock: number;
  averageCost: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface InventoryMovement {
  id: string;
  productId: string;
  product?: Product;
  type: 'IN' | 'OUT' | 'ADJUSTMENT';
  quantity: number;
  unitCost: number;
  totalCost: number;
  reference: string | null;
  description: string | null;
  date: Date;
  createdAt: Date;
}

export interface CreateProductDto {
  code: string;
  name: string;
  description?: string;
  unit: string;
  initialStock?: number;
  initialCost?: number;
}

export interface CreateInventoryMovementDto {
  productId: string;
  type: 'IN' | 'OUT' | 'ADJUSTMENT';
  quantity: number;
  unitCost: number;
  reference?: string;
  description?: string;
  date: string;
}

