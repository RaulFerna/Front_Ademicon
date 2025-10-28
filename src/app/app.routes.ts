import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { VendasComponent } from './features/vendas/vendas.component';
import { HistoricoComponent } from './features/historico/historico.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'vendas', component: VendasComponent },
  { path: 'historico', component: HistoricoComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
