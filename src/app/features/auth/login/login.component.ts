import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  rememberMe = false;

  constructor(private router: Router) {}

  enviar() {
    console.log("Tentando logar com:");
    console.log("Email:", this.loginData.email);
    console.log("Senha:", this.loginData.password);

    if (this.loginData.email === 'admin' && this.loginData.password === '1234') {
      console.log('Login bem-sucedido!');
      this.router.navigate(['/vendas']);
    } else {
      console.log('Usuário ou senha incorretos.');
    }
  }
}
