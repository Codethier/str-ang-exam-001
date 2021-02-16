
import { Injectable } from '@angular/core';
import { Heroes } from '../heroes-component/heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroList: Heroes[] = [
    {
      id: 1,
      name: 'placeholder1',
      superPower: 'tolerates',
      address: '0x6ff3f45sbsdfe',
    },
    {
      id: 2,
      name: 'placeholder2',
      superPower: 'coding',
      address: '0x6ff3f45sbsdfw',
    },
    {
      id: 3,
      name: 'placeholder3',
      superPower: 'in',
      address: '0x6ff3f45sbsdfes',
    },
    {
      id: 4,
      name: 'placeholder4',
      superPower: 'javascript',
      address: '0x6ff3f45sbsdasd',
    },
    {
      id: 5,
      name: 'placeholder5',
      superPower: 'sneksnek',
      address: '0x6ff3f45sbsdqdqw',
    },
  ];

  constructor() { }

  getAll(): Heroes[] {
    return this.heroList;
  }
}
