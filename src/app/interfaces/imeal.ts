export interface IMeal {
  id: number;
  patientId: number;
  type: 'Colazione' | 'Pranzo' | 'Cena' | 'Spuntino';
  description: string;
  date: string; // Data del pasto
}
