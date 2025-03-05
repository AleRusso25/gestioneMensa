export interface IUser {
  id: number;
  name: string;
  surname: string;
  email: string;
  role: 'ADMIN' | 'NUTRIZIONISTA' | 'CUOCO' | 'CAPOREPARTO' | 'MEDICO';
  token?: string;
}
