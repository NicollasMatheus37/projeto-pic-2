import { Component, OnInit } from '@angular/core';
import { DistrictsModuleService } from '../services/districts-module.service';
import {DijkstraTree} from "dijkstra-tree";
import { DijkstraService } from '../services/dijkstra.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public route = {
    bestRoute: "",
    quilometers: null
  }

  public districts;
  public distances;

  public districtsName = [];
  public firstDistricts = [];
  public secondsDistricts = [];
  public thirdDistricts = [];
  public fourthDistricts = [];

  public graph: boolean = false;

  constructor(private districtsModule: DistrictsModuleService,
    private dijkstraService: DijkstraService) {
    this.districts = this.districtsModule.districts;
    this.districtsName = this.districtsModule.districtsName;
    this.getDistrictsLists();
    this.createGraph();
  }

  createGraph() {
    for(let i = 0; i < this.distances.length; i++) {
      let nameOfVertex = this.districtsName[i];
      this.dijkstraService.addVertex(nameOfVertex, this.distances[i]);
    }
  }

  getDistance(district) {
    this.route.bestRoute = '';
    this.route.quilometers = 0;
    this.graph = true;
    let name = district.name;
    let response = this.dijkstraService.findShortestWay(name);
    console.log(response)
    for(let i = 0; i < (response.length - 1); i++) {
      if(i > 0) this.route.bestRoute += ', ';
      this.route.bestRoute += response[i];
    }
    this.route.quilometers = response[response.length - 1];
  }

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
