import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NotaFiscalService {


  constructor(private http: HttpClient) { }


}
