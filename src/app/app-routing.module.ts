import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const rotas: Routes = [
  { path: 'notafiscal', loadChildren: () => import('./nota-fiscal/nota-fiscal.module').then(m => m.NotaFiscalModule) },
  { path: '', redirectTo: 'notafiscal', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
