import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  constructor(private afAuth: AngularFireAuth) {}

  register(email: string, password: string) {
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then(user => console.log('Usuário registrado com sucesso:', user))
      .catch(err => console.error('Erro ao registrar usuário:', err));
  }
}
