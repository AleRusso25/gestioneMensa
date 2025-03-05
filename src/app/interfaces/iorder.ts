
export interface IOrder {
  id: number;
  patientId: number;
  mealId: number;
  status: 'IN ATTESA' | 'CONSEGNATO' | 'ANNULLATO';
  orderDate: string;
}
