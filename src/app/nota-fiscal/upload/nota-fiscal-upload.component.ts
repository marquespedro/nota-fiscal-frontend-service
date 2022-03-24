import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { NotaFiscalService } from 'src/app/nota-fiscal.service';
import { environment } from 'src/environments/environment';

import { MessageService } from 'primeng-lts/api';
import { NotaFiscal } from 'src/app/shared/nota-fiscal.model';



@Component({
  selector: 'app-nota-fiscal-upload',
  templateUrl: './nota-fiscal-upload.component.html',
  styleUrls: ['./nota-fiscal-upload.component.css'],
})
export class NotaFiscalUploadComponent implements OnInit {

  urlUpload = `${environment.urlApi}/notas-fiscais/upload`;

  notas: Array<NotaFiscal> | [] = [];

  display = false;

  notaSelecionada: NotaFiscal | undefined;

  constructor(
    private router: Router,
    private notaFiscalService: NotaFiscalService,
    private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.notaFiscalService.obterNotas().subscribe(notas => {
      this.notas = notas;
    });
  }

  aposTerminarEnvioArquivo(event: any) {
    if (event) {
      this.messageService.add({ severity: 'success', summary: '', detail: 'Arquivo foi recepcionado com sucesso, dentro de instantes será processado!' });
    }
  }

  detalhar(nota: NotaFiscal){
    this.display = true;
    this.notaSelecionada = nota;
  }
}
