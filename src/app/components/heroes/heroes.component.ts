import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  loading = true;

  constructor(private _heroesService: HeroesService) {
      this._heroesService.getHeroes()
        .subscribe(data => {
          console.log(data);
          this.heroes = data;
          this.loading = false;
        });
  }

  ngOnInit() { }

  borrarHeroe(heroe: string) {
    this._heroesService.borrarHeroe(heroe)
    .subscribe(data => {
        if (data) {
          console.log(data);
        }else {
          delete this.heroes[heroe];
        }
    });
  }
}
