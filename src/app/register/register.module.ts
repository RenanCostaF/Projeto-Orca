import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    AngularFireAuthModule // Certifique-se de importar aqui
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
