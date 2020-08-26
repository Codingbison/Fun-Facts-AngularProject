import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FunFactsComponent } from './fun-facts/fun-facts.component';
import { PromisesComponent } from './promises/promises.component';
import { CallbacksComponent } from './callbacks/callbacks.component';
import { MapComponent } from './map/map.component';
import { JavascriptComponent } from './javascript/javascript.component';

@NgModule({
  declarations: [
    AppComponent,
    FunFactsComponent,
    PromisesComponent,
    CallbacksComponent,
    MapComponent,
    JavascriptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
