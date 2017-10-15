import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map'

import { Hero } from './hero';

// The Injectable decorator tells TypeScript to emit metadata about the service.
@Injectable()
export class HeroService {
	//  HEROES: Hero[];
	constructor(private http: HttpClient) {}

	getHeroes() {
		return this.http.get('/api/items').map((res:Response) => res['results']);
	}
	getHero(id: number) {
		return this.getHeroes()
		.subscribe(heroes => heroes.find(hero => hero.id === id));
	}
}
