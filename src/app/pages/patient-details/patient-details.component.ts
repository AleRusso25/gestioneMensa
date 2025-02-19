import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patient-details',
  standalone: false,
  templateUrl: './patient-details.component.html',
  styleUrl: './patient-details.component.scss',
})
export class PatientDetailsComponent {
  patient: any = null;
  patientId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientService: PatientService
  ) {}

  ngOnInit() {
    this.patientId = Number(this.route.snapshot.paramMap.get('id'));
    this.getPatientDetails();
  }

  getPatientDetails() {
    this.patientService.getPatientById(this.patientId).subscribe({
      next: (data) => {
        this.patient = data;
        console.log('Dati paziente:', this.patient);
      },
      error: (err) => {
        console.error('Errore nel caricamento del paziente:', err);
      },
    });
  }

  goBack() {
    this.router.navigate(['/patients']); // Torna alla lista pazienti
  }
}
