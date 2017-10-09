import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import cradle from 'cradle';

cradle.setup({
	host: '35.192.136.54'
});
var db = new(cradle.Connection)('http://35.192.136.54', 5984, {
	auth: { username: 'stockhausenj', password: 'couchdb' }}).database('starwars')
db.create()

// The Injectable decorator tells TypeScript to emit metadata about the service.
@Injectable()
export class HeroService {
	// A Promise promises to call back when the results are ready.
	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}

	getHero(id: number): Promise<Hero> {
		return this.getHeroes()
		.then(heroes => heroes.find(hero => hero.id === id));
	}
}
