import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DistrictsModuleService } from './services/districts-module.service';
import { DijkstraService } from './services/dijkstra.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DistrictsModuleService,
    DijkstraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
