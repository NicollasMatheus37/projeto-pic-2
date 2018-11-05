import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { DijkstraModule } from './dijkstra.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    DijkstraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
