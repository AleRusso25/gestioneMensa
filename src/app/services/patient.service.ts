import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPatient } from '../models/patient.interface';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private apiUrl = 'http://localhost:8080/api/patients'; // Modifica con il tuo backend

  constructor(private http: HttpClient) {}

  // Ottenere tutti i pazienti
  getAllPatients(): Observable<IPatient[]> {
    return this.http.get<IPatient[]>(`${this.apiUrl}`);
  }

  // Ottenere un singolo paziente per ID
  getPatientById(id: number): Observable<IPatient> {
    return this.http.get<IPatient>(`${this.apiUrl}/${id}`);
  }

  // Creare un nuovo paziente
  addPatient(patient: IPatient): Observable<IPatient> {
    return this.http.post<IPatient>(`${this.apiUrl}`, patient);
  }

  // Aggiornare i dati di un paziente
  updatePatient(id: number, patient: IPatient): Observable<IPatient> {
    return this.http.put<IPatient>(`${this.apiUrl}/${id}`, patient);
  }

  // Eliminare un paziente
  deletePatient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
