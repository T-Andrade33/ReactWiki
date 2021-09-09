import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    address: {
      country: 'BR',
      state: 'Rio de Janeiro',
      city: 'Três Rios',
      street: 'Avenida Alan Cardek, nº 615, Vila Isabel'
    },
    avatarUrl: '/static/images/avatars/avatar_3.png',
    createdAt: 1555016400000,
    email: 'admin@imbramil.com.br',
    name: 'Seropec',
    phone: '(24) 98134-5180'
  },
  {
    id: uuid(),
    address: {
      country: 'BR',
      state: 'São Paulo',
      city: 'São Paulo',
      street: 'Rua Lincoln de Almeida Peçanha, nº000, Vila Isabel'
    },
    avatarUrl: '/static/images/avatars/avatar_4.png',
    createdAt: 1555016400000,
    email: 'admin@imbramil.com.br',
    name: 'Imbramil',
    phone: '(24) 98852-2006'
  }
];
