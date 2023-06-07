import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/entidades';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  endpoint=environment.backEndServer + 'api/cliente/';

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }

  ListarClientes(): Observable<any> {
    let finalUrl = this.endpoint+'findAll';
    return this.httpClient.get(finalUrl);
  }

  newCliente(cliente:Cliente): Observable<any> {
    let finalUrl = this.endpoint+'create';
    return this.httpClient.post<Cliente>(finalUrl,JSON.stringify(cliente),this.httpOptions);
  }

  deleteCliente(id:Number): Observable<any> {
    let finalUrl = this.endpoint+'delete/'+id;
    return this.httpClient.get(finalUrl);
  }

  findbyCedula(cedula:Number): Observable<any> {
    let finalUrl = this.endpoint+'findByCedula/'+cedula;
    return this.httpClient.get(finalUrl);
  }

  updateCliente(cliente:Cliente): Observable<any> {
    let finalUrl = this.endpoint+'update';
    return this.httpClient.post<Cliente>(finalUrl,JSON.stringify(cliente),this.httpOptions);
  }
}
