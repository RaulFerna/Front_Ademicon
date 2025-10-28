import { Component } from '@angular/core';

interface Venda {
  id: number;
  cliente: string;
  valor: number;
  data: string;
}

@Component({
  selector: 'app-vendas',
  standalone: true,
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent {
  vendas: Venda[] = [
    { id: 1, cliente: 'João Silva', valor: 1500, data: '2025-10-23' },
    { id: 2, cliente: 'Maria Souza', valor: 2300, data: '2025-10-22' },
  ];

  novaVenda: Partial<Venda> = {};

  adicionarVenda(): void {
    if (this.novaVenda.cliente && this.novaVenda.valor) {
      const nova: Venda = {
        id: this.vendas.length + 1,
        cliente: this.novaVenda.cliente!,
        valor: Number(this.novaVenda.valor),
        data: new Date().toISOString().split('T')[0]
      };
      this.vendas.push(nova);
      this.novaVenda = {};
    }
  }

  removerVenda(id: number): void {
    this.vendas = this.vendas.filter(v => v.id !== id);
  }
}
