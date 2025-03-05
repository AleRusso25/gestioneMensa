import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { MealService } from '../../services/meal.service';
import { IPatient } from '../../interfaces/ipatient';
import { IMeal } from '../../interfaces/imeal';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss'],
})
export class PatientDetailsComponent implements OnInit {
  patient!: IPatient | null;
  meals: IMeal[] = [];
  newMeal: IMeal = {
    id: 0,
    patientId: 0,
    type: 'Pranzo',
    description: '',
    date: '',
  };
  editingMeal: IMeal | null = null;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService,
    private mealService: MealService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!id) {
      this.errorMessage = 'ID paziente non valido.';
      return;
    }

    this.patientService.getPatientById(id).subscribe({
      next: (data) => {
        this.patient = data;
        this.loadMeals(id);
      },
      error: () => {
        this.errorMessage = 'Errore nel caricamento del paziente.';
      },
    });
  }

  loadMeals(patientId: number): void {
    this.mealService.getMealsByPatient(patientId).subscribe({
      next: (data) => {
        this.meals = data;
      },
      error: () => {
        this.errorMessage = 'Errore nel caricamento dei pasti.';
      },
    });
  }

  addMeal(): void {
    if (!this.patient) return;
    this.newMeal.patientId = this.patient.id;
    this.mealService.addMeal(this.newMeal).subscribe({
      next: (meal) => {
        this.meals.push(meal);
        this.newMeal = {
          id: 0,
          patientId: this.patient.id,
          type: 'Pranzo',
          description: '',
          date: '',
        };
      },
      error: () => {
        this.errorMessage = "Errore nell'aggiunta del pasto.";
      },
    });
  }

  deleteMeal(mealId: number): void {
    if (!confirm('Sei sicuro di voler eliminare questo pasto?')) return;
    this.mealService.deleteMeal(mealId).subscribe({
      next: () => {
        this.meals = this.meals.filter((meal) => meal.id !== mealId);
      },
      error: () => {
        this.errorMessage = "Errore nell'eliminazione del pasto.";
      },
    });
  }

  editMeal(meal: IMeal): void {
    this.editingMeal = { ...meal }; // Creiamo una copia per la modifica
  }

  cancelEdit(): void {
    this.editingMeal = null;
  }

  saveMeal(): void {
    if (!this.editingMeal) return;
    this.mealService.updateMeal(this.editingMeal).subscribe({
      next: (updatedMeal) => {
        const index = this.meals.findIndex((m) => m.id === updatedMeal.id);
        if (index !== -1) {
          this.meals[index] = updatedMeal;
        }
        this.editingMeal = null;
      },
      error: () => {
        this.errorMessage = 'Errore nella modifica del pasto.';
      },
    });
  }
}
