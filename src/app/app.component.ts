import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
  template: `<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>`
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}
export class Hero {
  id: number;
  name: string;
}
