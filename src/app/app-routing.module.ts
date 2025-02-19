import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'patients',
    loadChildren: () =>
      import('./pages/patients/patients.module').then((m) => m.PatientsModule),
  },
  {
    path: 'patient-details',
    loadChildren: () =>
      import('./pages/patient-details/patient-details.module').then(
        (m) => m.PatientDetailsModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
