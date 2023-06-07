import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inscripcion } from 'src/app/entidades';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  endpoint = environment.backEndServer + 'api/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }


  ListarInscrip(): Observable<any> {
    let finalUrl = this.endpoint + 'inscripciones';
    return this.httpClient.get(finalUrl);
  }
  newInscrip(ins:Inscripcion): Observable<any> {
    let finalUrl = this.endpoint+'inscripciones';
    return this.httpClient.post<Inscripcion>(finalUrl,JSON.stringify(ins),this.httpOptions);
  }

  deleteInscrip(id:Number): Observable<any> {
    let finalUrl = this.endpoint+'inscripciones/'+id;
    return this.httpClient.delete(finalUrl);
  }

  findbyID(id:Number): Observable<any> {
    let finalUrl = this.endpoint+'findByCedula/'+id;
    return this.httpClient.get(finalUrl);
  }

  updateInscripcion(ins:Inscripcion): Observable<any> {
    let finalUrl = this.endpoint+'inscripciones/'+ins.codigo;
    return this.httpClient.put<Inscripcion>(finalUrl,JSON.stringify(ins),this.httpOptions);
  }

}
