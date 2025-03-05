import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsRoutingModule } from './patients-routing.module';
import { FormsModule } from '@angular/forms';
import { PatientsComponent } from './patients.component'; // ✅ Importazione corretta
import { PatientDetailsComponent } from '../patient-details/patient-details.component';


@NgModule({
  imports: [
    CommonModule,
    PatientsRoutingModule,
    FormsModule,
    PatientsComponent, // ✅ Import invece di dichiarare
    PatientDetailsComponent, // ✅ Import invece di dichiarare
  ],
})
export class PatientsModule {}
