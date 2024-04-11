import { IFood } from './food';

export type TFormData = Omit<IFood, 'id' | 'available'>;
