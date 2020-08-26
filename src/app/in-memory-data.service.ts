import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  // tslint:disable-next-line: typedef
  createDb() {
    const heroes = [
      { id: 11, name: 'Hi' },
      { id: 12, name: 'How' },
      { id: 13, name: 'Are' },
      { id: 14, name: 'You' },
      { id: 15, name: 'I' },
      { id: 16, name: 'Am' },
      { id: 17, name: 'Fine' },
      { id: 18, name: 'Thank' },
      { id: 19, name: 'You' },
      { id: 20, name: '!' },
    ];
    return {heroes};
  }

  // make sure hero id always got id if heroes.length < 0 return a initial id = 11. If heroes.id > 0 heroes.id += 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

  constructor() { }
}
