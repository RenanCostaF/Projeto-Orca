import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private afAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('Login realizado com sucesso:', userCredential.user);
        // Redirecione para a página principal
      })
      .catch(err => {
        console.error('Erro no login:', err);
        alert('E-mail ou senha inválidos.');
      });
  }
}
