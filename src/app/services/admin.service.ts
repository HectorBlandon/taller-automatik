import { Injectable } from '@angular/core';
import { Admin } from '../models/adminModel';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  baseUrl = 'http://localhost:3000/api/backend';

  constructor(private http: HttpClient) { }

  saveA(admin: Admin): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' }); 
    return this.http.post(
      this.baseUrl + '/administrador',
      JSON.stringify(admin),
      { headers: httpHeaders }
    );
  }

  login(credenciales: any): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(
      this.baseUrl + '/login',
      JSON.stringify(credenciales),
      { headers: httpHeaders }
    );
  }

  resetPassword(credenciales: any): Observable<any> {
    
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(
      this.baseUrl + '/resetPassword',
      JSON.stringify(credenciales),
      { headers: httpHeaders }
    );
  }
  cambiarPassword(credenciales: any): Observable<any> {
    
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(
      this.baseUrl + '/cambiarPassword',
      JSON.stringify(credenciales),
      { headers: httpHeaders }
    );
  }

  delete(id: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete(this.baseUrl + '/administrador/eliminar/' + id, {
      headers: httpHeaders,
    });
  }

  update(admin: Admin, id: number): Observable<any> {
    console.log('service', id);
    
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(
      this.baseUrl + '/administrador/actualizar/' + id,
      JSON.stringify(admin),
      { headers: httpHeaders }
    );
  }

  getId(id: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseUrl + '/administrador/buscarPorId/' + id, {
      headers: httpHeaders,
    });
  }

  getAdministradores(): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseUrl + '/administrador/buscarAdministradores/', {
      headers: httpHeaders,
    });
  }

  getAll(idTaller: number): Observable<any> {
    const httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseUrl + '/administrador/buscarPorTaller/' + idTaller, {
      headers: httpHeaders,
    });
  }
}
