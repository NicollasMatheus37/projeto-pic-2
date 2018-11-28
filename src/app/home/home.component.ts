import { Component, OnInit } from '@angular/core';
import { DistrictsModuleService } from '../services/districts-module.service';
import { DistancesModuleService } from '../services/distances-module.service';
import { GetDistancesService } from '../services/get-distances.service';
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

  public graph = [
    {
      origin: null,
      destination: null,
      distance: null
    }
  ];
  public algorithm;

  public begin;

  constructor(private districtsModule: DistrictsModuleService,
    private distancesModule: DistancesModuleService,
    private getDistancesService: GetDistancesService,
    private dijkstraService: DijkstraService) {
    this.districts = this.districtsModule.districts;
    this.districtsName = this.districtsModule.districtsName;
    this.distances = distancesModule.distances;
    console.log(this.distances)
    this.getDistrictsLists();
    this.createGraph();
  }

  // createGraph() {
  //   let k = 0;
  //   let dist = this.distancesModule.distances;
  //   for(let i = 0; i < dist.length; i++) {
  //     for(let j = 0; j < dist[i].length; j++) {
  //       this.graph[k] = {
  //         origin: this.districtsName[i],
  //         destination: dist[i][j].destino,
  //         distance: Math.round(dist[i][j].distance)
  //       }
  //       k++;
  //     }
  //   }
  //   console.log(this.graph)
  //   this.algorithm = new DijkstraTree(this.graph);
  //   console.log(this.algorithm);
  // }

  createGraph() {
    for(let i = 0; i < this.distances.length; i++) {
      let nameOfVertex = this.districtsName[i];
      this.dijkstraService.addVertex(nameOfVertex, this.distances[i]);
    }
  }

  getDistance(district) {
    let name = district.name;
    this.dijkstraService.findShortestWay(name);
  }

  // getDistance(district) {
  //   let name = district.name
  //   let result = this.algorithm.getTree(name);
  //   this.showResult(result);    
  // }

  showResult(result) {
    this.route.quilometers = result['Comerciário'];
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
