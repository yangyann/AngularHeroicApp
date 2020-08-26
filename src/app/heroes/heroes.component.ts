import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
// import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  // selectHero: Hero;

  constructor(
    private heroService: HeroService,
    // private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    this.getHeroes(); // call this function when the app started
  }

  // get service from hero.service.ts
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  // ...

  // onSelect(hero: Hero): void {
  //   this.selectHero = hero;
  //   this.messageService.add('HeroesComponent: Selected hero id=$(hero.id)');
  // }

}
