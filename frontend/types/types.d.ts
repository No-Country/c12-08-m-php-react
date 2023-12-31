export interface NoteData {
  id: number;
  title: string;
  description: string;
}

export interface User {
  name: string;
  surname: string;
  birth: string;
  email: string;
  username: string;
  photo_url: string;
  phone: string;
  gender: 'Femenino' | 'Masculino' | 'Prefiero no decirlo';
  id: number;
  created_at: Date;
}

interface Item {
  name: string;
  indications: string;
  quantity: number;
  is_single_dose: boolean;
  init_date: Date;
  due_date?: Date;
  time: string;
  category_id: 1 | 2 | 3;
}
