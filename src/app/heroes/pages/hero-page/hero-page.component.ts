import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/hero.service';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit {

  constructor( private heroesService : HeroesService){}
  ngOnInit(): void {

  }

}
