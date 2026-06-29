import { Component, Input, Output, EventEmitter, forwardRef, ElementRef, HostListener, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-searchable-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="searchable-select" [class.open]="isOpen">
      <div class="select-input-container" (click)="toggleOpen()">
        <input 
          type="text" 
          [placeholder]="placeholder"
          [(ngModel)]="searchText"
          (input)="onSearchChange()"
          (focus)="open()"
          class="select-input"
          [disabled]="disabled"
        />
        <span class="material-icons dropdown-icon">arrow_drop_down</span>
      </div>
      
      <div class="dropdown-list" *ngIf="isOpen">
        <div 
          class="dropdown-item" 
          *ngFor="let item of filteredOptions"
          (click)="selectItem(item)"
          [class.selected]="item.value === value"
        >
          {{ item.label }}
        </div>
        <div class="dropdown-item empty" *ngIf="filteredOptions.length === 0">
          No hay resultados
        </div>
      </div>
    </div>
  `,
  styles: [`
    .searchable-select {
      position: relative;
      width: 100%;
    }
    .select-input-container {
      position: relative;
      width: 100%;
    }
    .select-input {
      width: 100%;
      padding-right: 30px;
      cursor: text;
    }
    .dropdown-icon {
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      color: #666;
    }
    .dropdown-list {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      max-height: 200px;
      overflow-y: auto;
      z-index: 1000;
      margin-top: 4px;
    }
    .dropdown-item {
      padding: 8px 12px;
      cursor: pointer;
    }
    .dropdown-item:hover {
      background: #f5f5f5;
    }
    .dropdown-item.selected {
      background: #e6f2ff;
      color: #0066cc;
    }
    .dropdown-item.empty {
      color: #999;
      cursor: default;
    }
    .searchable-select.open .select-input {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  `],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchableSelectComponent),
      multi: true
    }
  ]
})
export class SearchableSelectComponent implements ControlValueAccessor, OnChanges {
  @Input() options: any[] = [];
  @Input() bindLabel: string | ((item: any) => string) = 'label';
  @Input() bindValue: string | ((item: any) => any) = 'value';
  @Input() placeholder = 'Buscar...';
  @Input() disabled = false;

  value: any = null;
  searchText = '';
  isOpen = false;
  filteredOptions: any[] = [];

  onChange: any = () => {};
  onTouch: any = () => {};

  constructor(private eRef: ElementRef) {}

  ngOnChanges() {
    this.filteredOptions = this.options || [];
    this.setSearchTextFromValue();
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.close();
    }
  }

  toggleOpen() {
    if (this.disabled) return;
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.filteredOptions = this.options || [];
      if (this.value) {
         this.searchText = '';
      }
    } else {
      this.setSearchTextFromValue();
    }
  }

  open() {
    if (this.disabled) return;
    this.isOpen = true;
    this.filteredOptions = this.options || [];
    if (this.value) {
      this.searchText = '';
    }
  }

  close() {
    this.isOpen = false;
    this.setSearchTextFromValue();
  }

  onSearchChange() {
    const text = this.searchText.toLowerCase();
    this.filteredOptions = (this.options || []).filter(o => {
      const label = this.getLabel(o);
      return label && label.toLowerCase().includes(text);
    });
    this.isOpen = true;
  }

  selectItem(item: any) {
    this.value = this.getValue(item);
    this.searchText = this.getLabel(item);
    this.isOpen = false;
    this.onChange(this.value);
    this.onTouch();
  }

  setSearchTextFromValue() {
    if (this.value && this.options) {
      const selected = this.options.find(o => this.getValue(o) === this.value);
      this.searchText = selected ? this.getLabel(selected) : '';
    } else {
      this.searchText = '';
    }
  }

  getLabel(item: any): string {
    if (!item) return '';
    return typeof this.bindLabel === 'function' ? this.bindLabel(item) : item[this.bindLabel as string];
  }

  getValue(item: any): any {
    if (!item) return null;
    return typeof this.bindValue === 'function' ? this.bindValue(item) : item[this.bindValue as string];
  }

  writeValue(val: any): void {
    this.value = val;
    this.setSearchTextFromValue();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
