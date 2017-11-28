import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import 'rxjs/Rx';
import { debug } from 'util';

@Injectable()
export class HeroesService {

  heroesUrl = 'https://heroesapp-ed708.firebaseio.com/heroes.json';
  heroeUrl = 'https://heroesapp-ed708.firebaseio.com/heroes/';
  constructor(private _http: Http) {

  }

  nuevoHeroe(heroe: Heroe) {
      let body = JSON.stringify(heroe);
      let headers = new Headers({
          'Content-type': 'application/json'
      });

      return this._http.post(this.heroesUrl, body, {headers})
        .map(res => {
          return res.json();
        });
  }

actualizarHeroe(heroe: Heroe, key: string) {
  let body = JSON.stringify(heroe);
  let headers = new Headers({
      'Content-type': 'application/json'
  });

  let url = `${ this.heroeUrl }${ key }.json`;
  return this._http.put(url, body, {headers})
    .map(res => {
      return res.json();
    });
}

  getHeroe(key: string) {
    let url = `${ this.heroeUrl }${ key }.json`;
    return this._http.get(url)
    .map(res => {
      return res.json();
    });
  }

  getHeroes() {
      return this._http.get(this.heroesUrl)
      .map(res => {
          return res.json();
      });
  }

  borrarHeroe(key: string) {
    let url = `${ this.heroeUrl }${ key }.json`;
    return this._http.delete(url)
    .map(res => {
        return res.json();
    });
  }
}
