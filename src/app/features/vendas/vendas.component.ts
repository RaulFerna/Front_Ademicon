import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ importar aqui

interface Sale {
  id: string;
  clientName: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalValue: number;
  date: string;
}

@Component({
  selector: 'app-sales',
  standalone: true, // importante!
  imports: [CommonModule, FormsModule], // ✅ adicionar FormsModule aqui
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent  implements OnInit {
  sales: Sale[] = [
    {
      id: 'V001',
      clientName: 'João Silva',
      productName: 'Product A',
      quantity: 10,
      unitPrice: 199.0,
      totalValue: 1990.0,
      date: '2025-01-15'
    },
    {
      id: 'V002',
      clientName: 'Maria Santos',
      productName: 'Product B',
      quantity: 5,
      unitPrice: 299.0,
      totalValue: 1495.0,
      date: '2025-01-16'
    }
  ];

  showModal = false;
  modalType: 'add' | 'remove' | 'edit' = 'add';
  selectedSale: Sale | null = null;

  formData: Partial<Sale> = {
    id: '',
    clientName: '',
    productName: '',
    quantity: 0,
    unitPrice: 0,
    date: ''
  };

  ngOnInit(): void {}

  openModal(type: 'add' | 'remove' | 'edit'): void {
    this.modalType = type;
    this.showModal = true;

    if (type === 'add') {
      this.resetForm();
    } else if (type === 'edit' && this.selectedSale) {
      this.formData = { ...this.selectedSale };
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.resetForm();
  }

  resetForm(): void {
    this.formData = {
      id: '',
      clientName: '',
      productName: '',
      quantity: 0,
      unitPrice: 0,
      date: ''
    };
  }

  selectSale(sale: Sale): void {
    this.selectedSale = sale;
  }

  addSale(): void {
    const newSale: Sale = {
      id: this.formData.id!,
      clientName: this.formData.clientName!,
      productName: this.formData.productName!,
      quantity: this.formData.quantity!,
      unitPrice: this.formData.unitPrice!,
      totalValue: this.formData.quantity! * this.formData.unitPrice!,
      date: this.formData.date!
    };

    this.sales.push(newSale);
    this.closeModal();
    console.log('Venda adicionada:', newSale);
  }

  removeSale(): void {
    if (this.selectedSale) {
      const index = this.sales.findIndex(s => s.id === this.selectedSale!.id);
      if (index > -1) {
        this.sales.splice(index, 1);
        console.log('Venda removida:', this.selectedSale);
        this.selectedSale = null;
        this.closeModal();
      }
    }
  }

  editSale(): void {
    if (this.selectedSale) {
      const index = this.sales.findIndex(s => s.id === this.selectedSale!.id);
      if (index > -1) {
        this.sales[index] = {
          ...this.formData as Sale,
          totalValue: this.formData.quantity! * this.formData.unitPrice!
        };
        console.log('Venda editada:', this.sales[index]);
        this.selectedSale = null;
        this.closeModal();
      }
    }
  }

  getTotalSales(): number {
    return this.sales.reduce((total, sale) => total + sale.totalValue, 0);
  }
}
