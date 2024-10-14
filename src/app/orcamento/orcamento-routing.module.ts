import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrcamentoPage } from './orcamento.page';

const routes: Routes = [
  {
    path: '',
    component: OrcamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrcamentoPageRoutingModule {}
