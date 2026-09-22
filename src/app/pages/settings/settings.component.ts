import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsService, CompanySettings } from '../../core/services/settings.service';
import { AccountService } from '../../core/services/account.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  settings: CompanySettings | null = null;
  accounts: any[] = [];
  isLoading = true;
  isSaving = false;

  constructor(
    private settingsService: SettingsService,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    this.accountService.getAccounts().subscribe(accounts => {
      this.accounts = accounts;
      
      this.settingsService.getSettings().subscribe(settings => {
        this.settings = settings;
        if (!this.settings.defaultAccounts) {
          this.settings.defaultAccounts = {
            payableAccountId: null, receivableAccountId: null,
            inventoryAccountId: null, salesAccountId: null,
            cogsAccountId: null, expenseAccountId: null
          };
        }
        this.isLoading = false;
      });
    });
  }

  save() {
    if (!this.settings) return;
    this.isSaving = true;
    this.settingsService.updateSettings(this.settings).subscribe(() => {
      this.isSaving = false;
      alert('Configuración guardada exitosamente');
    });
  }
}
