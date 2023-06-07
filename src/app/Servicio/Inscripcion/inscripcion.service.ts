import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscripcion } from 'src/app/entidades';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  endpoint = environment.backEndServer + 'api/cliente/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }


  ListarInscrip(): Observable<any> {
    let finalUrl = this.endpoint + 'findAll';
    return this.httpClient.get(finalUrl);
  }
  newInscrip(ins:Inscripcion): Observable<any> {
    let finalUrl = this.endpoint+'create';
    return this.httpClient.post<Inscripcion>(finalUrl,JSON.stringify(ins),this.httpOptions);
  }

  deleteInscrip(id:Number): Observable<any> {
    let finalUrl = this.endpoint+'delete/'+id;
    return this.httpClient.get(finalUrl);
  }

  findbyID(id:Number): Observable<any> {
    let finalUrl = this.endpoint+'findByCedula/'+id;
    return this.httpClient.get(finalUrl);
  }

  updateCurso(ins:Inscripcion): Observable<any> {
    let finalUrl = this.endpoint+'update';
    return this.httpClient.post<Inscripcion>(finalUrl,JSON.stringify(ins),this.httpOptions);
  }

}
