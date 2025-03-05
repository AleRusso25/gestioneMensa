export interface IPatient {
  id: number;
  name: string;
  surname: string;
  age: number;
  admissionDate: string;
  dischargeDate?: string;
  allergies: string[];
  dietType:
    | 'NORMALE'
    | 'IPOSODICA'
    | 'DIABETICA'
    | 'VEGETARIANA'
    | 'SENZA GLUTINE';
}
