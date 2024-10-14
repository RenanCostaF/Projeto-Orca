import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'novo-orcamento',
    loadChildren: () => import('./novo-orcamento/novo-orcamento.module').then(m => m.NovoOrcamentoPageModule)
  },
  {
    path: 'orcamento',
    loadChildren: () => import('./orcamento/orcamento.module').then(m => m.OrcamentoPageModule)
  },
  {
    path: 'andamento',
    loadChildren: () => import('./andamento/andamento.module').then(m => m.AndamentoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
