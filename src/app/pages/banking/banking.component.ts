import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BankingService } from '../../core/services/banking.service';
import {
  BankAccount,
  CashAccount,
  BankTransaction,
  CreateBankAccountDto,
  CreateCashAccountDto,
  CreateBankTransactionDto,
} from '../../models/banking.model';

@Component({
  selector: 'app-banking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './banking.component.html',
  styleUrl: './banking.component.scss',
})
export class BankingComponent implements OnInit {
  bankAccounts: BankAccount[] = [];
  cashAccounts: CashAccount[] = [];
  transactions: BankTransaction[] = [];
  showBankAccountForm = false;
  showCashAccountForm = false;
  showTransactionForm = false;
  selectedAccountId = '';

  newBankAccount: CreateBankAccountDto = {
    accountNumber: '',
    bankName: '',
    accountType: 'CHECKING',
    initialBalance: 0,
  };

  newCashAccount: CreateCashAccountDto = {
    name: '',
    initialBalance: 0,
  };

  newTransaction: CreateBankTransactionDto = {
    bankAccountId: '',
    type: 'DEPOSIT',
    amount: 0,
    date: new Date().toISOString().split('T')[0],
  };

  constructor(private bankingService: BankingService) {}

  ngOnInit() {
    this.loadBankAccounts();
    this.loadCashAccounts();
    this.loadTransactions();
  }

  loadBankAccounts() {
    this.bankingService.getBankAccounts().subscribe({
      next: (data) => {
        this.bankAccounts = data;
      },
      error: (error) => {
        console.error('Error loading bank accounts:', error);
      },
    });
  }

  loadCashAccounts() {
    this.bankingService.getCashAccounts().subscribe({
      next: (data) => {
        this.cashAccounts = data;
      },
      error: (error) => {
        console.error('Error loading cash accounts:', error);
      },
    });
  }

  loadTransactions() {
    this.bankingService
      .getTransactions(this.selectedAccountId || undefined)
      .subscribe({
        next: (data) => {
          this.transactions = data;
        },
        error: (error) => {
          console.error('Error loading transactions:', error);
        },
      });
  }

  createBankAccount() {
    this.bankingService.createBankAccount(this.newBankAccount).subscribe({
      next: () => {
        alert('Cuenta bancaria creada exitosamente');
        this.showBankAccountForm = false;
        this.resetBankAccountForm();
        this.loadBankAccounts();
      },
      error: (error) => {
        alert(error.error?.message || 'Error al crear la cuenta');
      },
    });
  }

  createCashAccount() {
    this.bankingService.createCashAccount(this.newCashAccount).subscribe({
      next: () => {
        alert('Caja creada exitosamente');
        this.showCashAccountForm = false;
        this.resetCashAccountForm();
        this.loadCashAccounts();
      },
      error: (error) => {
        alert(error.error?.message || 'Error al crear la caja');
      },
    });
  }

  createTransaction() {
    this.bankingService.createTransaction(this.newTransaction).subscribe({
      next: () => {
        alert('Transacción registrada exitosamente');
        this.showTransactionForm = false;
        this.resetTransactionForm();
        this.loadTransactions();
        this.loadBankAccounts();
      },
      error: (error) => {
        alert(error.error?.message || 'Error al registrar la transacción');
      },
    });
  }

  resetBankAccountForm() {
    this.newBankAccount = {
      accountNumber: '',
      bankName: '',
      accountType: 'CHECKING',
      initialBalance: 0,
    };
  }

  resetCashAccountForm() {
    this.newCashAccount = {
      name: '',
      initialBalance: 0,
    };
  }

  resetTransactionForm() {
    this.newTransaction = {
      bankAccountId: '',
      type: 'DEPOSIT',
      amount: 0,
      date: new Date().toISOString().split('T')[0],
    };
  }

  onAccountFilterChange() {
    this.loadTransactions();
  }

  getTotalBankBalance(): number {
    return this.bankAccounts.reduce((sum, a) => sum + a.balance, 0);
  }

  getTotalCashBalance(): number {
    return this.cashAccounts.reduce((sum, a) => sum + a.balance, 0);
  }
}

