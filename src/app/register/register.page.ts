import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  constructor(private router: Router) {}

  register() {
    // Substitua pela lógica de registro
    console.log('Usuário registrado!');
    this.router.navigate(['/login']); // Redireciona para a página de login
  }
}
