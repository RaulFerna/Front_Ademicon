import { Component, OnInit } from '@angular/core';

interface Endereco {
  id: number;
  cliente: string;
  endereco: string;
  dataAtualizacao: string;
}

@Component({
  selector: 'app-historico',
  standalone: true,
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})
export class HistoricoComponent implements OnInit {
  historico: Endereco[] = [];

  ngOnInit(): void {
    // Simulação de histórico inicial
    this.historico = [
      { id: 1, cliente: 'João Silva', endereco: 'Rua das Flores, 123', dataAtualizacao: '2025-10-21' },
      { id: 2, cliente: 'Maria Souza', endereco: 'Av. Brasil, 456', dataAtualizacao: '2025-10-20' }
    ];
  }
}
