import { Component, OnInit } from '@angular/core';
import { DistrictsModuleService } from '../services/districts-module.service';
import { DistancesModuleService } from '../services/distances-module.service';
import { GetDistancesService } from '../services/get-distances.service';
import { DijkstraService } from '../services/dijkstra.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public route = {
    bestRoute: "",
    quilometers: "",
    districts: Array()
  }

  public districts;
  public distances;

  public districtsName = [];
  public firstDistricts = [];
  public secondsDistricts = [];
  public thirdDistricts = [];
  public fourthDistricts = [];

  public begin;

  constructor(private districtsModule: DistrictsModuleService,
    private distancesModule: DistancesModuleService,
    private dijkstra: DijkstraService) {
    this.districts = this.districtsModule.districts;
    this.districtsName = this.districtsModule.districtsName;
    this.distances = distancesModule.distances;
    this.getDistrictsLists();
  }

  getDistance() {
    
    }

    // getDistricts() {
    //   let districts = [];
    //   let k = 0;
    //   for(let i = 0; i < )
    // }

    // getNumberOfConections(index) {
    //   this.distances['inicio'];
    //   let conections = [];
    //   for(let i = 0; i < this.distances.length; i++) {
    //     if(this.distances['inicio'] == index) {
    //       console.log(index);
    //       conections['distance'].push(this.distances[i]);
    //       conections['number']++;
    //     } else {
    //       break;
    //     }
    //   }
    //   // return console.log(conections)
    // }

  getDistrictsLists() {
    let j = 0;
    for(let i = 0; i < 22; i++) {
      this.firstDistricts[j] = {index: i, name: this.districtsName[i]};
      j++;
    }
    j = 0;
    for(let i = 22; i < 44; i++) {
      this.secondsDistricts[j] = {index: i, name: this.districtsName[i]};
      j++;
    }
    j = 0;
    for(let i = 44; i < 66; i++) {
      this.thirdDistricts[j] = {index: i, name: this.districtsName[i]};
      j++;
    }
    j = 0;
    for(let i = 66; i < 88; i++) {
      this.fourthDistricts[j] = {index: i, name: this.districtsName[i]};
      j++;
    }
  }

  ngOnInit() {
  }
  
}
