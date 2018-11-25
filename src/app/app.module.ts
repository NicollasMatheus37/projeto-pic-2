import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { DistancesModuleService } from './services/distances-module.service';
import { DistrictsModuleService } from './services/districts-module.service';
import { GetDistancesService } from './services/get-distances.service';
import { DijkstraService } from './services/dijkstra.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DistancesModuleService,
    DistrictsModuleService,
    GetDistancesService,
    DijkstraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
