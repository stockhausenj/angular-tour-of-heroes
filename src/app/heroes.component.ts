import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css'],
	providers: [HeroService]
})

export class HeroesComponent implements OnInit {
	heroes: Hero[];
	selectedHero: Hero;

	constructor(
		private heroService: HeroService,
		private router: Router
	) {}

	// ngOnInit is a Angular lifecycle hook.
  ngOnInit(): void {
		this.getHeroes();
	}

	getHeroes(): void {
		// A Promise is a asynchronous technique. 
		// Pass the callback function as an argument to the Promise's then() method.
		// The arrow function is more succinct than the equivalent function expression.
		this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}
}
