import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NotaFiscalService } from 'src/app/nota-fiscal.service';
import { environment } from 'src/environments/environment';

import { MessageService } from 'primeng-lts/api';



@Component({
  selector: 'app-nota-fiscal-upload',
  templateUrl: './nota-fiscal-upload.component.html',
  styleUrls: ['./nota-fiscal-upload.component.css'],
})
export class NotaFiscalUploadComponent implements OnInit {

  formularioPessoa: FormGroup = this.construirFormulario();

  arquivoUrl = `${environment.urlApi}/notas-fiscais/upload`;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private notaFiscalService: NotaFiscalService,
    private messageService: MessageService) {
  }

  ngOnInit(): void {
  }

  construirFormulario() {
    return this.formularioPessoa = this.formBuilder.group({
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]]
    });
  }
 

  aposTerminarEnvioArquivo(event:any) {
    if(event){
      this.messageService.add({ severity: 'success', summary: '', detail: 'Nota enviada com sucesso!'});
    }
  }
}
