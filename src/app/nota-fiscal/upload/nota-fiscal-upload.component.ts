import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng-lts/api';
import { NotaFiscalService } from 'src/app/nota-fiscal.service';
import { NotaFiscal } from 'src/app/shared/nota-fiscal.model';
import { environment } from 'src/environments/environment';





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
    private messageService: MessageService,
    private confirmationService : ConfirmationService) {
  }

  ngOnInit(): void {
    this.consultarNotas();
  }

  consultarNotas() {
    this.notaFiscalService.obterNotas().subscribe(notas => {
      this.notas = notas;
    });
  }

  aposTerminarEnvioArquivo(event: any) {
    this.messageService.add({ severity: 'success', summary: 'Envio Arquivo', 
        detail: 'Arquivo foi recepcionado com sucesso, dentro de instantes será processado!' });
  }

  detalhar(nota: NotaFiscal) {
    this.display = true;
    this.notaSelecionada = nota;
  }

  remover(nota: NotaFiscal) {
    this.confirmationService.confirm({
      message: 'Desejar confirmar exclusão da nota fiscal?',
      accept: () => {
        this.notaFiscalService.remover(nota.id).subscribe(() => { });
        this.notas = this.notas.filter(n => n.id != nota.id);
      }
  });
  }
}
