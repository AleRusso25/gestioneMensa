import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientDetailsRoutingModule } from './patient-details-routing.module';
import { FormsModule } from '@angular/forms';
import { PatientDetailsComponent } from './patient-details.component';



@NgModule({
  declarations: [
    PatientDetailsComponent,
  ],

  imports: [
    CommonModule,
    PatientDetailsRoutingModule,
    FormsModule
  ]
})
export class PatientDetailsModule { }
