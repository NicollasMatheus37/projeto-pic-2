import { Injectable } from '@angular/core';
import { DistrictsModuleService } from './districts-module.service';
import { DistancesModuleService } from './distances-module.service';
import { DijkstraTree } from "../../../node_modules/dijkstra-tree";

const graph = [
  { origin: "A", destination: "B", distance: 10 },
  { origin: "B", destination: "C", distance: 10 },
  { origin: "B", destination: "C", distance: 5 },
  { origin: "C", destination: "D", distance: 11 },
];

const algorithm = new DijkstraTree(graph);
const result = algorithm.getTree("A");

// {
//   "A": 0,
//   "B": 10,
//   "C": 15,
//   "D": 26
// };

@Injectable()
export class DijkstraService {

    

    result() {
        console.log(result);
    }
}
