export interface IDiet {
  id: number;
  type: 'NORMALE' | 'IPOSODICA' | 'DIABETICA' | 'VEGETARIANA' | 'SENZA GLUTINE';
  description: string;
  meals: IMeal[];
}
