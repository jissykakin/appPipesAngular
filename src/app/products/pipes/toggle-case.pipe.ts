import { Pipe, PipeTransform } from '@angular/core';

//jissy kakin | toggleCase => 'JISSY KAKIN'
//JISSY KAKIN | toggleCase => 'jissy kakin'

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform ( value: string , toUpper: boolean = false ): string {

        return ( toUpper )
              ? value.toUpperCase()
              : value.toLowerCase();
  }
}
