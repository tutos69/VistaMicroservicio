import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/entidades';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  endpoint = environment.backEndServer + 'api/';



  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient:HttpClient) { }


  ListarCursor(): Observable<any> {
    let finalUrl = this.endpoint + 'cursos';
    return this.httpClient.get(finalUrl);
  }

  newCurso(curso: Curso): Observable<any> {
    let finalUrl = this.endpoint + 'cursos';
    return this.httpClient.post<Curso>(finalUrl, JSON.stringify(curso), this.httpOptions);
  }

  deleteCurso(id: String): Observable<any> {
    let finalUrl = this.endpoint + 'cursos/' + id;
    return this.httpClient.delete(finalUrl);
  }

  findbyID(id: String): Observable<any> {
    let finalUrl = this.endpoint + 'cursos/' + id;
    return this.httpClient.get(finalUrl);
  }

  updateCurso(curso: Curso): Observable<any> {
    let finalUrl = this.endpoint + 'cursos/'+curso.codigoCurso;
    return this.httpClient.put<Curso>(finalUrl, JSON.stringify(curso), this.httpOptions);
  }


}
