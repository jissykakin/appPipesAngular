import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importación de Módulos
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductsRoutingModule } from './products-routing.module';

//Importación de Pipes
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';

//Importación de Pages
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderCustomComponent } from './pages/order-custom/order-custom.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';



@NgModule({
  declarations: [
    BasicPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderCustomComponent,

    //Pipes
    CanFlyPipe,
    SortByPipe,
    ToggleCasePipe,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
  ]
})
export class ProductsModule { }
