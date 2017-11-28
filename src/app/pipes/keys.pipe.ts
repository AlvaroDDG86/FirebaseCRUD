import { Pipe, PipeTransform } from '@angular/core';
import { debug } from 'util';

@Pipe({
  name: 'keys',
  pure: false
})
export class KeysPipe implements PipeTransform {

  transform(value: any): string[] {
    let keys = [];
    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }
}
