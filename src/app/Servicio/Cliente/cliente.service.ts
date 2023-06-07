import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/entidades';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  endpoint=environment.backEndServer + 'api/';

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }

  ListarClientes(): Observable<any> {
    let finalUrl = this.endpoint+'clientes';
    return this.httpClient.get(finalUrl);
  }

  newCliente(cliente:Cliente): Observable<any> {
    let finalUrl = this.endpoint+'clientes';
    return this.httpClient.post<Cliente>(finalUrl,JSON.stringify(cliente),this.httpOptions);
  }

  deleteCliente(id:String): Observable<any> {
    let finalUrl = this.endpoint+'clientes/'+id;
    return this.httpClient.delete(finalUrl);
  }

  findbyCedula(cedula:String): Observable<any> {
    let finalUrl = this.endpoint+'clientes/'+cedula;
    return this.httpClient.get(finalUrl);
  }

  updateCliente(cliente:Cliente): Observable<any> {
    let finalUrl = this.endpoint+'clientes/'+cliente.cedula;
    return this.httpClient.put<Cliente>(finalUrl,JSON.stringify(cliente),this.httpOptions);
  }
}
