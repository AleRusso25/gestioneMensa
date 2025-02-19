import { Component } from '@angular/core';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patients',
  standalone: false,
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.scss',
})
export class PatientsComponent {
  patients: any[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.getPatients();
  }

  getPatients() {
    this.patientService.getAllPatients().subscribe({
      next: (data) => {
        this.patients = data;
        console.log('Pazienti caricati:', this.patients);
      },
      error: (err) =>
        console.error('Errore nel caricamento dei pazienti:', err),
    });
  }
}
