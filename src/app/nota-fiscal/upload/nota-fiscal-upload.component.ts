import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArquivoService } from 'src/app/arquivo.service';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-nota-fiscal-upload',
  templateUrl: './nota-fiscal-upload.component.html',
  styleUrls: ['./nota-fiscal-upload.component.css']
})
export class NotaFiscalUploadComponent implements OnInit {

  formularioPessoa: FormGroup = this.construirFormulario();

  arquivoUrl = `${environment.urlApi}/arquivo`;

  constructor(private formBuilder: FormBuilder, 
              private router : Router,
              private arquivoService:ArquivoService) {
  }

  ngOnInit(): void {
  }

  construirFormulario() {
    return this.formularioPessoa = this.formBuilder.group({
      nome: ['', [Validators.required]],
      sobrenome: ['', [Validators.required]]
    });
  }

}
