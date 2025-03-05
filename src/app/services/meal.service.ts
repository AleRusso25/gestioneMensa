import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMeal } from '../interfaces/imeal';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  private apiUrl = 'http://localhost:8080/api/meals'; // Modifica con il tuo backend

  constructor(private http: HttpClient) {}

  getMealsByPatient(patientId: number): Observable<IMeal[]> {
    return this.http.get<IMeal[]>(`${this.apiUrl}?patientId=${patientId}`);
  }

  addMeal(meal: IMeal): Observable<IMeal> {
    return this.http.post<IMeal>(this.apiUrl, meal);
  }

  updateMeal(meal: IMeal): Observable<IMeal> {
    return this.http.put<IMeal>(`${this.apiUrl}/${meal.id}`, meal);
  }

  deleteMeal(mealId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${mealId}`);
  }
}
