import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map'
import {Observable} from 'rxjs/Rx';

import { Hero } from './hero';

// The Injectable decorator tells TypeScript to emit metadata about the service.
@Injectable()
export class HeroService {
	constructor(private http: HttpClient) {}

	getHeroes():Observable<Hero[]> {
		return this.http.get('/api/items').map((res:Response) => res['results']);
	}
	getHero(id: string):Observable<Hero> {
		return this.getHeroes().map(heroes => heroes.find(hero => hero.id === id));
	}
}
