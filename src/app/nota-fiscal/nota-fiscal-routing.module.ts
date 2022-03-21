import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NotaFiscalUploadComponent } from './upload/nota-fiscal-upload.component';


const rotas: Routes = [
  { path: '', component: NotaFiscalUploadComponent},
];
@NgModule({
  imports: [
    RouterModule.forChild(rotas)
  ],
  exports: [
    RouterModule
  ]
})

export class NotaFiscalRoutingModule { }
