import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { ButtonModule } from 'primeng-lts/button';
import { InputTextModule } from 'primeng-lts/inputtext';
import {TableModule} from 'primeng/table';

import { NotaFiscalRoutingModule } from './nota-fiscal-routing.module';
import { NotaFiscalUploadComponent } from './upload/nota-fiscal-upload.component';

import {FileUploadModule} from 'primeng-lts/fileupload';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [NotaFiscalUploadComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule,
    NotaFiscalRoutingModule
  ],
  providers:[]
})
export class NotaFiscalModule { }
