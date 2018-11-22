import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { DijkstraModule } from './dijkstra.module';
import { DistancesModuleService } from './services/distances-module.service';
import { DistrictsModuleService } from './services/districts-module.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    DijkstraModule,
  ],
  providers: [
    DistancesModuleService,
    DistrictsModuleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
