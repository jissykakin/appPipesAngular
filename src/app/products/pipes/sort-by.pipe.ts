import { Pipe, PipeTransform } from '@angular/core';
import { Color, Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})

export class SortByPipe implements PipeTransform {
  transform( heroes: Hero[] , sortBy?: keyof Hero | '' , isDesc: 0|1 = 0 ) : Hero[] {

    switch (sortBy) {
      case 'name':
        return heroes.sort( (a,b) => (a.name > b.name) ? -1 * isDesc  : isDesc - 1)

      case 'canFly':
      return heroes.sort( (a,b) => (a.canFly > b.canFly) ?  -1 * isDesc  : isDesc - 1)

      case 'color':
        return heroes.sort( (a,b) => (a.color > b.color) ? -1 * isDesc  : isDesc - 1)

      case '':
        return heroes;

      default:
        throw new Error("La propiedad no se encuentra definida");

    }
  }
}
