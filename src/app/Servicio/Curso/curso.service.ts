import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/entidades';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  endpoint=environment.backEndServer + 'api/cliente/';

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }


  ListarCursor(): Observable<any> {
    let finalUrl = this.endpoint+'findAll';
    return this.httpClient.get(finalUrl);
  }

  newCurso(curso:Curso): Observable<any> {
    let finalUrl = this.endpoint+'create';
    return this.httpClient.post<Curso>(finalUrl,JSON.stringify(curso),this.httpOptions);
  }

  deleteCurso(id:Number): Observable<any> {
    let finalUrl = this.endpoint+'delete/'+id;
    return this.httpClient.get(finalUrl);
  }

  findbyID(id:Number): Observable<any> {
    let finalUrl = this.endpoint+'findByCedula/'+id;
    return this.httpClient.get(finalUrl);
  }

  updateCurso(curso:Curso): Observable<any> {
    let finalUrl = this.endpoint+'update';
    return this.httpClient.post<Curso>(finalUrl,JSON.stringify(curso),this.httpOptions);
  }

}
