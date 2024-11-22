import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private router: Router) {}

  goBack() {
    // Substitua '/' pela rota para a qual você deseja que o botão volte.
    this.router.navigate(['/home']);
  }

  login() {
    const isAuthenticated = true; // Substitua por sua lógica de autenticação.

    if (isAuthenticated) {
      this.router.navigate(['/principal']); // Redireciona para a página principal após login.
    } else {
      console.error('Falha no login!');
    }
  }
}
