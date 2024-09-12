import { Component } from '@angular/core';

@Component({
  selector: 'products-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.css'
})
export class BasicPageComponent {

  public nameLower: string = 'jissy kakin';
  public nameUpper: string = 'JISSY KAKIN';
  public fullName : string = 'JIssY MerlAnO ZaBalETa';

  public customDate: Date = new Date();

}
