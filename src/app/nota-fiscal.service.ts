import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NotaFiscal } from './shared/nota-fiscal.model';


@Injectable({
  providedIn: 'root'
})
export class NotaFiscalService {

  notasFiscaisUrl = `${environment.urlApi}/notas-fiscais`;

  constructor(private http: HttpClient) { }

  obterNotas(): Observable<NotaFiscal[]> {
    return this.http.get<NotaFiscal[]>(`${this.notasFiscaisUrl}`);
  }

  remover(id: number) {
    return this.http.delete<NotaFiscal[]>(`${this.notasFiscaisUrl}/${id}`);
  }
}
