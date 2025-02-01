import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/hero.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {

  public searchInput = new FormControl('');
  public heroes: Hero[] = [];


  constructor(private heroService: HeroesService){}

  searchHero(){
    const value: string = this.searchInput.value || '';
    console.log('query:', value);

    this.heroService.getSuggestions(value)
    .subscribe(heroes=> this.heroes = heroes);
  }


}


