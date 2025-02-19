import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private apiUrl = 'http://localhost:8080/api/auth/patients'; // Cambia con il tuo endpoint

  constructor(private http: HttpClient) {}

  getAllPatients(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getPatientById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addPatient(patient: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, patient);
  }

  updatePatient(id: number, patient: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, patient);
  }

  deletePatient(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
