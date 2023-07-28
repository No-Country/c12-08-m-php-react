import inyectables from '@/public/svg/injectables.svg';
import pills from '@/public/svg/capsule.svg';
import tablets from '@/public/svg/tablets.svg';
import { Item } from '@/types/types';

export const categorieImgs = {
  1: {
    img: inyectables,
    name: 'inyectables',
  },
  2: {
    img: pills,
    name: 'pildoras',
  },
  3: {
    img: tablets,
    name: 'comprimidos',
  },
};

export const mockupData: Item[] = [
  {
    name: 'Actron',
    indications: 'Tomar 1 pildora(s)',
    category_id: 2,
    time: '10:15',
    init_date: new Date('2023-07-21'),
    is_single_dose: true,
    quantity: 1,
  },
  {
    name: 'Yectafer',
    indications: 'Aplicar 1 ml',
    category_id: 1,
    time: '08:53',
    init_date: new Date('2023-07-25'),
    is_single_dose: true,
    quantity: 1,
  },
  {
    name: 'Paracetamol',
    indications: 'Tomar 1 pastilla(s)',
    category_id: 3,
    time: '16:27',
    init_date: new Date('2023-08-04'),
    is_single_dose: true,
    quantity: 1,
  },
  {
    name: 'Paracetamol',
    indications: 'Tomar 1 pastilla(s)',
    category_id: 3,
    time: '14:09',
    init_date: new Date('2023-07-31'),
    is_single_dose: true,
    quantity: 3,
  },
  {
    name: 'Lorazepam',
    indications: 'Tomar 1 pastilla(s)',
    category_id: 3,
    time: '19:34',
    init_date: new Date('2023-08-15'),
    is_single_dose: true,
    quantity: 1,
  },
  {
    name: 'Paracetamol',
    indications: 'Tomar 1 pastilla(s)',
    category_id: 3,
    time: '05:42',
    init_date: new Date('2023-07-24'),
    is_single_dose: true,
    quantity: 1,
  },
  {
    name: 'Amoxidal',
    indications: 'Tomar 1 pildora(s)',
    category_id: 2,
    time: '18:50',
    init_date: new Date('2023-07-29'),
    is_single_dose: true,
    quantity: 1,
  },
  {
    name: 'Paracetamol',
    indications: 'Tomar 1 pastilla(s)',
    category_id: 3,
    time: '03:12',
    init_date: new Date('2023-08-07'),
    is_single_dose: true,
    quantity: 1,
  },
  {
    name: 'Paracetamol',
    indications: 'Tomar 1 pastilla(s)',
    category_id: 3,
    time: '22:37',
    init_date: new Date('2023-08-06'),
    is_single_dose: true,
    quantity: 1,
  },
  {
    name: 'Paracetamol',
    indications: 'Tomar 1 pastilla(s)',
    category_id: 3,
    time: '01:21',
    init_date: new Date('2023-07-20'),
    is_single_dose: true,
    quantity: 1,
  },
  {
    name: 'Paracetamol',
    indications: 'Tomar 1 pastilla(s)',
    category_id: 3,
    time: '11:28',
    init_date: new Date('2023-07-27'),
    is_single_dose: true,
    quantity: 1,
  },
  {
    name: 'Yectafer',
    indications: 'Aplicar 1 ml',
    category_id: 1,
    time: '08:53',
    init_date: new Date('2023-07-26'),
    is_single_dose: true,
    quantity: 1,
  },
  {
    name: 'Amoxidal',
    indications: 'Tomar 1 pildora(s)',
    category_id: 2,
    time: '07:06',
    init_date: new Date('2023-08-02'),
    is_single_dose: true,
    quantity: 1,
  },
  {
    name: 'Paracetamol',
    indications: 'Tomar 1 pastilla(s)',
    category_id: 3,
    time: '20:45',
    init_date: new Date('2023-08-08'),
    is_single_dose: true,
    quantity: 1,
  },
];