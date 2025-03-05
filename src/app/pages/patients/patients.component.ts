import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { IPatient } from '../../interfaces/ipatient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
  patients: IPatient[] = [];
  filteredPatients: IPatient[] = [];
  searchText: string = '';
  errorMessage: string | null = null;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {
    this.patientService.getAllPatients().subscribe({
      next: (data) => {
        this.patients = data;
        this.filteredPatients = data; // Mostra tutti i pazienti all'inizio
      },
      error: (err) => {
        console.error('Errore nel caricamento dei pazienti:', err);
        this.errorMessage =
          'Errore nel caricamento dei pazienti. Riprova più tardi.';
      },
    });
  }

  filterPatients(): void {
    this.filteredPatients = this.patients.filter((patient) =>
      `${patient.name} ${patient.surname} ${patient.dietType}`
        .toLowerCase()
        .includes(this.searchText.toLowerCase())
    );
  }
}
