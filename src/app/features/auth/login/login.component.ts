import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  erroLogin: string | null = null;
  loginData = {
    email: '',
    password: ''
  };

  rememberMe = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { usuario, senha } = this.loginForm.value;
      if (usuario === 'admin' && senha === '1234') {
        this.router.navigate(['/vendas']);
      } else {
        this.erroLogin = 'Usuário ou senha incorretos.';
      }
    }
  }
}
