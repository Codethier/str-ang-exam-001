import {Component, OnInit} from '@angular/core';
import {Heroes} from './heroes';
import {HeroesService} from '../services/hero-feed.service';

@Component({
  selector: 'app-heroes-component',
  templateUrl: './heroes-component.component.html',
  styleUrls: ['./heroes-component.component.scss']
})
export class HeroesComponentComponent implements OnInit {
  heroesList: Heroes[] = [];

  constructor(heroesService: HeroesService) {
    this.heroesList = heroesService.getAll();
  }

  ngOnInit(): void {
  }

}
