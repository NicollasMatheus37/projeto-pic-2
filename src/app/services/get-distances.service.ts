import { Injectable } from '@angular/core';
import { DijkstraService } from './dijkstra.service';
import { DistancesModuleService } from './distances-module.service';

@Injectable()
export class GetDistancesService {

  public distances;
  constructor
    (private dijkstra: DijkstraService,
    public distancesModuleServices: DistancesModuleService)
    {
      this.distances = distancesModuleServices;
    }

  getBetterDistance() {

  }

  addVertexes() {
    console.log(this.distances.distances);
    for(let i = 0; i < this.distances.length; i++) {
      console.log("a");
      this.dijkstra.createVertex(this.distances.distances[i]);
      console.log(this.distances.distances[i]);
    }
  }
}
