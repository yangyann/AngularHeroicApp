import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES} from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {

    // send message after fetching datas
    this.messageService.add('HeroService: fetched heroes');
    return of (HEROES); // of($event): return an observable array that emit/send a single value
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of (HEROES.find(hero => hero.id === id));
  }

  constructor(private messageService: MessageService) { }
}
