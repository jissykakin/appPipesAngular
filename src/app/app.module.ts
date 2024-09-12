import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// configuracion del locale de la app (idiomas)
import  localEsCo from "@angular/common/locales/es-CO";
import  localDeBe from "@angular/common/locales/de-BE";

import { registerLocaleData } from "@angular/common";

registerLocaleData( localEsCo )
registerLocaleData( localDeBe )

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
