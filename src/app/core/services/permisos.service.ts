import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Permiso } from '../models/permiso.model';

@Injectable({ providedIn: 'root' })
export class PermisosService {
  private apiUrl = 'http://localhost:3000/permisos'; // Ajusta la URL según tu backend

  constructor(private http: HttpClient) {}

  getPermisos(): Observable<{ success: boolean; data: Permiso[] }> {
    return this.http.get<{ success: boolean; data: Permiso[] }>(this.apiUrl);
  }

  crearPermiso(formData: FormData) {
    return this.http.post(this.apiUrl, formData);
  }

  eliminarPermiso(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  actualizarPermiso(id: number, formData: FormData) {
    return this.http.patch(`${this.apiUrl}/${id}`, formData);
  }

  // Método para obtener los permisos del usuario autenticado
  getMisPermisos(): Observable<{ success: boolean; data: Permiso[] }> {
    return this.http.get<{ success: boolean; data: Permiso[] }>(this.apiUrl); //cambio hecho para que vuelva a funcionar el listado de permisos del usuario autenticado
  }
//Se actualizó el servicio de permisos para llamar al nuevo endpoint del backend para descargar documentos de aprobación
  descargarDocumento(id_permiso: number) {
    return this.http.get(`${this.apiUrl}/${id_permiso}/descargar-aprobacion`, {
      responseType: 'blob'
    });
  }
}