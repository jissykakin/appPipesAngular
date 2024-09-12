import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';
import { Binary } from '@angular/compiler';

@Component({
  selector: 'products-order-custom',
  templateUrl: './order-custom.component.html',
  styles: ``
})
export class OrderCustomComponent {


  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero | '' = '';
  public isDesc : 0|1 = 0;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.orange,
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green,
    }
  ]

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }


  changeOrder( orderBy : keyof Hero ): void {
    this.orderBy = orderBy;
    this.isDesc = (this.isDesc === 0 ? 1: 0);

  }

}
