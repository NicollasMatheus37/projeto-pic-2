import { Injectable } from '@angular/core';
import { DistrictsModuleService } from './districts-module.service';
import { DistancesModuleService } from './distances-module.service';
import { DijkstraTree } from "../../../node_modules/dijkstra-tree";

class NodeVertex {
    nameOfVertex: string;
    weight: number;
}

class Vertex {
    name: string;
    nodes: NodeVertex[];
    weight: number;

    constructor(theName: string, theNodes: NodeVertex[], theWeight: number) {
        this.name = theName;
        this.nodes = theNodes;
        this.weight = theWeight;
    }
}

class Dijkstra {

    vertices: any;
    constructor() {
        this.vertices = {};
    }

    addVertex(vertex: Vertex): void {
        this.vertices[vertex.name] = vertex;
    }

    findPointsOfShortestWay(start: string, finish: string, weight: number): string[] {

        let nextVertex: string = finish;
        let arrayWithVertex: string[] = [];
        while (nextVertex !== start) {

            let minWeigth: number = 99999999;
            let minVertex: string = "";
            for (let i of this.vertices[nextVertex].nodes) {
                try {
                    if (i.weight + this.vertices[i.nameOfVertex].weight < minWeigth) {
                        minWeigth = this.vertices[i.nameOfVertex].weight;
                        minVertex = i.nameOfVertex;
                    }    
                } catch (e) {
                    console.log(this.vertices)
                    console.log(i.nameOfVertex)
                }
                
            }
            arrayWithVertex.push(minVertex);
            nextVertex = minVertex;
        }
        return arrayWithVertex;
    }


    findShortestWay(start: string, finish: string): string[] {

        let nodes: any = {};
        let visitedVertex: string[] = [];

        for (let i in this.vertices) {
            if (this.vertices[i].name === start) {
                this.vertices[i].weight = 0;

            } else {
                this.vertices[i].weight = Number.MAX_VALUE;
            }
            nodes[this.vertices[i].name] = this.vertices[i].weight;
            
        }

        while (Object.keys(nodes).length !== 0) {
            let sortedVisitedByWeight: string[] = Object.keys(nodes).sort((a, b) => this.vertices[a].weight - this.vertices[b].weight);
            let currentVertex: Vertex = this.vertices[sortedVisitedByWeight[0]];
            for (let j of currentVertex.nodes) {
                const calculateWeight: number = currentVertex.weight + j.weight;
                try {
                    if (calculateWeight < this.vertices[j.nameOfVertex].weight) {
                        this.vertices[j.nameOfVertex].weight = calculateWeight;
                    }
                } catch(e) {
                    // console.log(j);
                }
                
            }
            delete nodes[sortedVisitedByWeight[0]];
        }
        const finishWeight: number = this.vertices[finish].weight;
        let arrayWithVertex: string[] = this.findPointsOfShortestWay(start, finish, finishWeight).reverse();
        arrayWithVertex.push(finish, finishWeight.toString());
        return arrayWithVertex;
    }

}

let dijkstra = new Dijkstra();
// dijkstra.addVertex(new Vertex("A", [{ nameOfVertex: "C", weight: 3 }, { nameOfVertex: "E", weight: 7 }, { nameOfVertex: "B", weight: 4 }], 1));
// dijkstra.addVertex(new Vertex("B", [{ nameOfVertex: "A", weight: 4 }, { nameOfVertex: "C", weight: 6 }, { nameOfVertex: "D", weight: 5 }], 1));
// dijkstra.addVertex(new Vertex("C", [{ nameOfVertex: "A", weight: 3 }, { nameOfVertex: "B", weight: 6 }, { nameOfVertex: "E", weight: 8 }, { nameOfVertex: "D", weight: 11 }], 1));
// dijkstra.addVertex(new Vertex("D", [{ nameOfVertex: "B", weight: 5 }, { nameOfVertex: "C", weight: 11 }, { nameOfVertex: "E", weight: 2 }, { nameOfVertex: "F", weight: 2 }], 1));
// dijkstra.addVertex(new Vertex("E", [{ nameOfVertex: "A", weight: 7 }, { nameOfVertex: "C", weight: 8 }, { nameOfVertex: "D", weight: 2 }, { nameOfVertex: "G", weight: 5 }], 1));
// dijkstra.addVertex(new Vertex("F", [{ nameOfVertex: "D", weight: 2 }, { nameOfVertex: "G", weight: 3 }], 1));
// dijkstra.addVertex(new Vertex("G", [{ nameOfVertex: "D", weight: 10 }, { nameOfVertex: "E", weight: 5 }, { nameOfVertex: "F", weight: 3 }], 1));
// console.log(dijkstra.findShortestWay("A", "F"));


@Injectable()
export class DijkstraService {

    addVertex(name, graph) {
        dijkstra.addVertex(new Vertex("Ana Maria",
[{nameOfVertex: "Cristo Redentor", weight: 3.7},{nameOfVertex: "São João", weight: 4.0},{nameOfVertex: "Renascer", weight: 2.8},{nameOfVertex: "Jardim Maristela", weight: 1.1},{nameOfVertex: "Linha Anta", weight: 1.3},{nameOfVertex: "Operária Nova", weight: 3.2}], 1));
dijkstra.addVertex(new Vertex("Argentina",
[{nameOfVertex: "Vila Rica", weight: 2.2},{nameOfVertex: "Brasília", weight: 1.6},{nameOfVertex: "Próspera", weight: 2.9},{nameOfVertex: "Linha Batista", weight: 2.0},{nameOfVertex: "São Simão", weight: 6.2}], 1));
dijkstra.addVertex(new Vertex("Arquimedes Naspolini",
[{nameOfVertex: "Mina Do Mato", weight: 1.6},{nameOfVertex: "Vera Cruz", weight: 2.6},{nameOfVertex: "Lote Seis", weight: 2.4},{nameOfVertex: "Mina Brasil", weight: 3.7}], 1));
dijkstra.addVertex(new Vertex("Boa Vista",
[{nameOfVertex: "Liberdade", weight: 0.84},{nameOfVertex: "Imperatriz", weight: 1.5},{nameOfVertex: "Paraíso", weight: 1.0},{nameOfVertex: "São Francisco", weight: 0.95},{nameOfVertex: "Vila Floresta", weight: 1.0},{nameOfVertex: "Vila Floresta II", weight: 1.1}], 1));
dijkstra.addVertex(new Vertex("Brasília",
[{nameOfVertex: "Próspera", weight: 1.6},{nameOfVertex: "Vila Rica", weight: 1.9},{nameOfVertex: "Argentina", weight: 1.6}], 1));
dijkstra.addVertex(new Vertex("Catarinense",
[{nameOfVertex: "Vila São José", weight: 1.2},{nameOfVertex: "Metropol", weight: 2.3},{nameOfVertex: "Rio Maina", weight: 2.1},{nameOfVertex: "Vila Francesa", weight: 2.8},{nameOfVertex: "Vila Macarini", weight: 1.2},{nameOfVertex: "Vila Visconde", weight: 1.7},{nameOfVertex: "Wosocris", weight: 1.1}], 1));
dijkstra.addVertex(new Vertex("Ceará",
[{nameOfVertex: "São Cristóvão", weight: 1.4},{nameOfVertex: "São Marcos", weight: 4.1},{nameOfVertex: "Michel", weight: 3.7},{nameOfVertex: "Jardim Maristela", weight: 1.6},{nameOfVertex: "Linha Anta", weight: 1.8},{nameOfVertex: "Nossa Senhora Da Salete", weight: 3.1},{nameOfVertex: "Próspera", weight: 2.4}], 1));
dijkstra.addVertex(new Vertex("Centro",
[{nameOfVertex: "Lote Seis", weight: 1.6},{nameOfVertex: "Vera Cruz", weight: 1.8},{nameOfVertex: "Operária Nova", weight: 3.0},{nameOfVertex: "Santa Catarina", weight: 3.6},{nameOfVertex: "Santa Bárbara", weight: 2.8},{nameOfVertex: "Comerciário", weight: 1.6},{nameOfVertex: "Cruzeiro Do Sul", weight: 1.7},{nameOfVertex: "Michel", weight: 2.3},{nameOfVertex: "Pio Corrêa", weight: 1.1},{nameOfVertex: "São Cristóvão", weight: 1.3}], 1));
dijkstra.addVertex(new Vertex("Cidade Mineira",
[{nameOfVertex: "Vila Isabel", weight: 2.3},{nameOfVertex: "Rio Maina", weight: 2.6},{nameOfVertex: "Wosocris", weight: 2.2},{nameOfVertex: "Vila Macarini", weight: 2.4},{nameOfVertex: "Vila Visconde", weight: 3.5},{nameOfVertex: "Distrito Industrial", weight: 2.2},{nameOfVertex: "Mina União", weight: 1.6},{nameOfVertex: "São Defende", weight: 5.0}], 1));
dijkstra.addVertex(new Vertex("Colonial",
[{ nameOfVertex: "Poço Um", weight: 1.2},{nameOfVertex: "Vila Visconde", weight: 1.2}], 1));
dijkstra.addVertex(new Vertex("Coloninha Zilli",
[{ nameOfVertex: "Laranjinha", weight: 3.2},{ nameOfVertex: "Monte Castelo", weight: 2.1},{ nameOfVertex: "Maria Céu", weight: 2.1},{nameOfVertex: "Mina Do Mato", weight: 1.9}], 1));
dijkstra.addVertex(new Vertex("Comerciário",
[{ nameOfVertex: "Michel", weight: 1.2},{ nameOfVertex: "Centro", weight: 1.6},{ nameOfVertex: "Pio Corrêa", weight: 1.9},{nameOfVertex: "Centro", weight: 1.6},{nameOfVertex: "São Cristóvão", weight: 1.1}], 1));
dijkstra.addVertex(new Vertex("Conjunto Habitacional Nova Esperança",
[{ nameOfVertex: "Progresso", weight: 1.9},{nameOfVertex: "São Defende", weight: 4.6},{nameOfVertex: "Vila Rica", weight: 0.35}], 1));
dijkstra.addVertex(new Vertex("Cristo Redentor",
[{ nameOfVertex: "São João", weight: 5.3},{nameOfVertex: "Ana Maria", weight: 3.7},{nameOfVertex: "Nossa Senhora Da Salete", weight: 3.6}], 1));
dijkstra.addVertex(new Vertex("Cruzeiro do Sul",
[{ nameOfVertex: "Mina Brasil", weight:1.8 },{ nameOfVertex: "Lote Seis", weight: 2.2},{ nameOfVertex: "Vera Cruz", weight: 2.4},{ nameOfVertex: "Centro", weight: 1.7},{nameOfVertex: "Pio Corrêa", weight: 1.6},{nameOfVertex: "Próspera", weight: 3.0}], 1));
dijkstra.addVertex(new Vertex("Dagostin",
[{ nameOfVertex: "Quarta Linha", weight: 3.1},{ nameOfVertex: "Verdinho", weight: 9.4},{nameOfVertex: "Morro Estêvão", weight: 2.4}], 1));
dijkstra.addVertex(new Vertex("Distrito Industrial",
[{ nameOfVertex: "Vila Isabel", weight: 1.9},{ nameOfVertex: "Cidade Mineira", weight: 2.2},{ nameOfVertex: "Vila Floresta II", weight: 2.1},{nameOfVertex: "Cidade Mineira", weight: 2.2},{nameOfVertex: "Mina União", weight: 1.6}], 1));
dijkstra.addVertex(new Vertex("Estaçãozinha",
[{ nameOfVertex: "Vila Miguel", weight: 1.0},{ nameOfVertex: "Metropol", weight: 1.6},{nameOfVertex: "Laranjinha", weight: 1.2},{nameOfVertex: "Vila São José", weight: 0.6}], 1));
dijkstra.addVertex(new Vertex("Fábio Silva",
[{ nameOfVertex: "São Marcos", weight: 0.75},{ nameOfVertex: "Santos Dumont", weight: 1.7},{ nameOfVertex: "Milanese", weight: 1.5},{nameOfVertex: "Jardim Paineiras", weight: 3.5},{nameOfVertex: "Recanto Verde", weight: 1.8},{nameOfVertex: "Renascer", weight: 3.7}], 1));
dijkstra.addVertex(new Vertex("Imigrantes",
[{ nameOfVertex: "Linha Batista", weight: 2.3}], 1));
dijkstra.addVertex(new Vertex("Imperatriz",
[{ nameOfVertex: "Mineira Nova", weight: 0.7},{ nameOfVertex: "São Francisco", weight: 0.7},{ nameOfVertex: "Liberdade", weight: 1.4},{ nameOfVertex: "Boa Vista", weight: 1.5},{nameOfVertex: "Mineira Velha", weight: 0.8},{nameOfVertex: "Promorar Vila Vitoria", weight: 1.7},{nameOfVertex: "Vila Belmiro", weight: 1.3}], 1));
dijkstra.addVertex(new Vertex("Jardim Angélica",
[{ nameOfVertex: "Universitário", weight: 2.8},{ nameOfVertex: "Santa Augusta", weight: 2.4},{nameOfVertex: "Milanese", weight: 4.0},{nameOfVertex: "Paraíso", weight: 3.6},{nameOfVertex: "Pinheirinho", weight: 2.6},{nameOfVertex: "Primeira Linha", weight: 5.8},{nameOfVertex: "Sangão", weight: 5.1}], 1));
dijkstra.addVertex(new Vertex("Jardim Maristela",
[{ nameOfVertex: "Linha Anta", weight: 1.0},{ nameOfVertex: "Ceará", weight: 1.6},{ nameOfVertex: "Ana Maria", weight: 1.1},{nameOfVertex: "Nossa Senhora Da Salete", weight: 2.9}], 1));
dijkstra.addVertex(new Vertex("Jardim Paineiras",
[{ nameOfVertex: "Renascer", weight: 3.1},{ nameOfVertex: "Primeira Linha", weight: 1.6},{ nameOfVertex: "Recanto Verde", weight: 2.7},{ nameOfVertex: "Fábio Silva", weight: 3.5},{ nameOfVertex: "Pedro Zanivan", weight: 2.6},{ nameOfVertex: "Morro Estêvão", weight: 3.2},{nameOfVertex: "São João", weight: 2.0}], 1));
dijkstra.addVertex(new Vertex("Jardim União",
[{ nameOfVertex: "Promorar Vila Vitoria", weight: 1.0},{ nameOfVertex: "Vila Belmiro", weight: 1.1},{ nameOfVertex: "Vila Manaus", weight: 1.6},{nameOfVertex: "Progresso", weight: 0.17},{nameOfVertex: "Santa Luzia", weight: 0.75},{nameOfVertex: "São Sebastião", weight: 1.1}], 1));
dijkstra.addVertex(new Vertex("Laranjinha",
[{ nameOfVertex: "Estaçãozinha", weight: 1.2},{nameOfVertex: "Mina Do Mato", weight: 5.3},{nameOfVertex: "Coloninha Zili", weight: 3.2}], 1));
dijkstra.addVertex(new Vertex("Liberdade",
[{ nameOfVertex: "Vila Floresta II", weight: 1.9},{ nameOfVertex: "Distrito Industrial", weight: 1.9},{ nameOfVertex: "Vila Isabel", weight: 2.3},{ nameOfVertex: "Rio Maina", weight: 1.9},{nameOfVertex: "Imperatriz", weight: 1.4},{nameOfVertex: "Mineira Nova", weight: 1.3},{nameOfVertex: "São Francisco", weight: 1.0},{nameOfVertex: "Vila Floresta II", weight: 1.6}], 1));
dijkstra.addVertex(new Vertex("Linha Anta",
[{ nameOfVertex: "Ceará", weight: 1.8},{ nameOfVertex: "Ana Maria", weight: 1.3},{ nameOfVertex: "Jardim Maristela", weight: 4.2},{nameOfVertex: "Jardim Maristela", weight: 1.0},{nameOfVertex: "Nossa Senhora Da Salete", weight: 3.7}], 1));
dijkstra.addVertex(new Vertex("Linha Batista",
[{ nameOfVertex: "Vila Rica", weight: 4.3},{ nameOfVertex: "São Simão", weight: 3.4},{ nameOfVertex: "Argentina", weight: 2.0},{nameOfVertex: "Imigrantes", weight: 2.3}], 1));
dijkstra.addVertex(new Vertex("Lote Seis",
[{ nameOfVertex: "Arquimedes Napolini", weight: 2.4},{ nameOfVertex: "Vera Cruz", weight: 1.7},{nameOfVertex: "Centro", weight: 1.6},{nameOfVertex: "Cruzeiro Do Sul", weight: 2.2},{nameOfVertex: "Mina Brasil", weight: 2.1}], 1));
dijkstra.addVertex(new Vertex("Maria Ceu",
[{ nameOfVertex: "Monte Castelo", weight: 3.1},{ nameOfVertex: "Vila Floresta II", weight: 2.9},{ nameOfVertex: "Santo Antônio", weight: 2.4},{nameOfVertex: "Coloninha Zili", weight: 2.1},{nameOfVertex: "Mina Do Mato", weight: 2.8},{nameOfVertex: "Operária Nova", weight: 1.2},{nameOfVertex: "Santa Catarina", weight: 1.3},{nameOfVertex: "Vera Cruz", weight: 2.5}], 1));
dijkstra.addVertex(new Vertex("Metropol",
[{ nameOfVertex: "São Marcos", weight: 1.1},{nameOfVertex: "Catarinense", weight: 2.3},{nameOfVertex: "Estaçãozinha", weight: 1.6},{nameOfVertex: "Poço Um", weight: 1.3},{nameOfVertex: "Vila Miguel", weight: 0.75},{nameOfVertex: "Vila São José", weight: 1.3},{nameOfVertex: "Vila Visconde", weight: 2.3}], 1));
dijkstra.addVertex(new Vertex("Michel",
[{ nameOfVertex: "Santos Dumont", weight: 2.1},{ nameOfVertex: "Santa Bárbara", weight: 1.3},{ nameOfVertex: "Operária Nova", weight: 2.4},{ nameOfVertex: "Centro", weight: 2.3},{ nameOfVertex: "Pio Corrêa", weight: 2.7},{nameOfVertex: "Ceará", weight: 3.7},{nameOfVertex: "Comerciário", weight: 1.2},{nameOfVertex: "São Luiz", weight: 1.0}], 1));
dijkstra.addVertex(new Vertex("Milanese",
[{ nameOfVertex: "Pinheirinho", weight: 2.8},{ nameOfVertex: "Jardim Angélica", weight: 4.0},{nameOfVertex: "Fábio Silva", weight: 1.5},{nameOfVertex: "Recanto Verde", weight: 1.9},{nameOfVertex: "Santos Dumont", weight: 0.28},{nameOfVertex: "São Luiz", weight: 1.4}], 1));
dijkstra.addVertex(new Vertex("Mina do Brasil",
[{ nameOfVertex: "Pinheirinho", weight: 3.7},{ nameOfVertex: "Lote Seis", weight: 2.1},{nameOfVertex: "Cruzeiro Do Sul", weight: 1.8},{nameOfVertex: "Próspera", weight: 4.2},{nameOfVertex: "São Simão", weight: 6.6}], 1));
dijkstra.addVertex(new Vertex("Mina do Mato",
[{ nameOfVertex: "Coloninha Zili", weight: 1.9},{ nameOfVertex: "Laranjinha", weight: 5.3},{ nameOfVertex: "Maria Céu", weight: 2.8},{ nameOfVertex: "São Sebastião", weight: 5.9}], 1));
dijkstra.addVertex(new Vertex("Mina União",
[{ nameOfVertex: "Distrito Industrial", weight: 1.6},{ nameOfVertex: "Cidade Mineira", weight: 1.6},{ nameOfVertex: "Mineira Nova", weight: 1.3},{ nameOfVertex: "São Defende", weight: 5.6},{nameOfVertex: "São Sebastião", weight: 1.6},{nameOfVertex: "Vila Belmiro", weight: 0.9}], 1));
dijkstra.addVertex(new Vertex("Minera Nova",
[{ nameOfVertex: "Liberdade", weight: 1.3},{ nameOfVertex: "Mina União", weight: 1.3},{ nameOfVertex: "Dagostin", weight: 1.6},{ nameOfVertex: "Vila Isabel", weight: 2.9},{ nameOfVertex: "Imperatriz", weight: 0.7},{ nameOfVertex: "Mineira Velha", weight: 1.2}], 1));
dijkstra.addVertex(new Vertex("Mineira Velha ",
[{ nameOfVertex: "Promorar Vila Vitoria", weight: 1.3},{ nameOfVertex: "Vila Belmiro", weight: 1.6},{ nameOfVertex: "Mineira Nova", weight: 1.2},{ nameOfVertex: "Imperatriz", weight: 0.8},{ nameOfVertex: "São Francisco", weight: 1.3},{ nameOfVertex: "Santa Augusta", weight: 1.1},{ nameOfVertex: "Universitário", weight: 2.3},{ nameOfVertex: "Vila Manaus", weight: 0.8}], 1));
dijkstra.addVertex(new Vertex("Monte Castelo",
[{ nameOfVertex: "Vila Zuleima", weight: 0.74},{ nameOfVertex: "Vila Floresta II", weight: 1.6},{ nameOfVertex: "Estaçãozinha", weight: 2.9},{ nameOfVertex: "Vila Floresta II", weight: 1.6},{ nameOfVertex: "Maria Céu", weight: 3.1},{ nameOfVertex: "Coloninha Zili", weight: 2.1}], 1));
dijkstra.addVertex(new Vertex("Morro Estevão",
[{ nameOfVertex: "Dagostin", weight: 2.4},{ nameOfVertex: "Sangão", weight: 4.2},{ nameOfVertex: "Jardim Paineiras", weight: 3.2},{ nameOfVertex: "Pedro Zanivan", weight: 1.9}], 1));
dijkstra.addVertex(new Vertex("Nossa Senhora Da Salete",
[{ nameOfVertex: "Ceará", weight: 3.1},{ nameOfVertex: "Jardim Maristela", weight: 2.9},{ nameOfVertex: "Linha Anta", weight: 3.7},{ nameOfVertex: "Ana Maria", weight: 3.2},{ nameOfVertex: "Cristo Redentor", weight: 3.6},{ nameOfVertex: "Próspera", weight: 2.6},{ nameOfVertex: "Vila Rica", weight: 3.2}], 1));
dijkstra.addVertex(new Vertex("Operária Nova",
[{ nameOfVertex: "Santa Bárbara", weight: 1.3},{ nameOfVertex: "Maria Céu", weight: 1.2},{ nameOfVertex: "Santo Antônio", weight: 1.8},{ nameOfVertex: "Centro", weight: 3.0},{ nameOfVertex: "Santa Catarina", weight: 1.7},{ nameOfVertex: "Michel", weight: 2.4}], 1));
dijkstra.addVertex(new Vertex("Paraíso",
[{ nameOfVertex: "Boa Vista", weight: 1},{ nameOfVertex: "Jardim Angélica", weight: 3.6},{ nameOfVertex: "Santa Augusta", weight: 1.5},{ nameOfVertex: "São Francisco", weight: 1.2},{ nameOfVertex: "Pinheirinho", weight: 2.0},{ nameOfVertex: "Santa Bárbara", weight: 2.9},{ nameOfVertex: "Santo Antônio", weight: 4.2},{ nameOfVertex: "Vila Floresta", weight: 1.6}], 1));
dijkstra.addVertex(new Vertex("Pedro Zanivan",
[{ nameOfVertex: "Morro Estêvão", weight: 1.9},{ nameOfVertex: "Sangão", weight: 3.9},{ nameOfVertex: "Jardim Paineiras", weight: 2.6}], 1));
dijkstra.addVertex(new Vertex("Pinheirinho",
[{ nameOfVertex: "Santo Antônio", weight: 2.4},{ nameOfVertex: "Vila Floresta", weight: 3.1},{ nameOfVertex: "Paraíso", weight: 2.0},{ nameOfVertex: "Jardim Angélica", weight: 2.6},{ nameOfVertex: "Santa Augusta", weight: 1.7},{ nameOfVertex: "Milanese", weight: 2.8},{ nameOfVertex: "Santa Bárbara", weight: 3.2},{ nameOfVertex: "Santos Dumont", weight: 2.6}], 1));
dijkstra.addVertex(new Vertex("Pio Corrêa",
[{ nameOfVertex: "Centro", weight: 1.1},{ nameOfVertex: "Cruzeiro Do Sul", weight: 1.6},{ nameOfVertex: "Comerciário", weight: 1.9},{ nameOfVertex: "Michel", weight: 2.7},{ nameOfVertex: "São Cristóvão", weight: 1.4},{ nameOfVertex: "Próspera", weight: 1.8}], 1));
dijkstra.addVertex(new Vertex("Poço Um",
[ { nameOfVertex: "Metropol", weight: 1.3},{ nameOfVertex: "Colonial", weight: 1.2}], 1));
dijkstra.addVertex(new Vertex("Primeira Linha",
[{ nameOfVertex: "Recanto Verde", weight: 3.6},{ nameOfVertex: "Jardim Angélica", weight: 5.8},{ nameOfVertex: "Universitário", weight: 6.8},{ nameOfVertex: "Jardim Paineiras", weight: 1.6},{ nameOfVertex: "Sangão", weight: 5.3},{ nameOfVertex: "Renascer", weight: 4.0}], 1));
dijkstra.addVertex(new Vertex("Progresso",
[{ nameOfVertex: "Jardim União", weight: 0.17},{ nameOfVertex: "Santa Luzia", weight: 0.64},{ nameOfVertex: "Promorar Vila Vitoria", weight: 1.1},{ nameOfVertex: "Vila Belmiro", weight: 1.3},{ nameOfVertex: "Conjunto H. Nova Esperança", weight: 1.9},{ nameOfVertex: "São Sebastião", weight: 1.1},{ nameOfVertex: "Vila Nova Esperança", weight: 2.2}], 1));
dijkstra.addVertex(new Vertex("Promorar Vila Vitória",
[{ nameOfVertex: "Vila Belmiro", weight: 0.6},{ nameOfVertex: "Mineira Nova", weight: 1.2},{ nameOfVertex: "Imperatriz", weight: 1.7},{ nameOfVertex: "Jardim União", weight: 1.0},{ nameOfVertex: "Mineira Velha", weight: 1.3},{ nameOfVertex: "Progresso", weight: 1.1},{ nameOfVertex: "Santa Luzia", weight: 0.95},{ nameOfVertex: "Vila Manaus", weight: 0.75}], 1));
dijkstra.addVertex(new Vertex("Próspera",
[{ nameOfVertex: "São Cristóvão", weight: 2.1},{ nameOfVertex: "Pio Corrêa", weight: 1.8},{ nameOfVertex: "Cruzeiro Do Sul", weight: 3.0},{ nameOfVertex: "Mina Brasil", weight: 4.2},{ nameOfVertex: "Ceará", weight: 2.4},{ nameOfVertex: "Nossa Senhora Da Salete", weight: 2.6},{ nameOfVertex: "Vila Rica", weight: 3.1},{ nameOfVertex: "Brasília", weight: 1.6}], 1));
dijkstra.addVertex(new Vertex("Quarta Linha",
[{ nameOfVertex: "Verdinho", weight: 9.7},{ nameOfVertex: "Dagostin", weight: 3.1}], 1));
dijkstra.addVertex(new Vertex("Recanto Verde",
[{ nameOfVertex: "Fábio Silva", weight: 1.8},{ nameOfVertex: "Milanese", weight: 1.9},{ nameOfVertex: "Santos Dumont", weight: 2.1},{ nameOfVertex: "São Luiz", weight: 2.1},{ nameOfVertex: "Jardim Paineiras", weight: 2.7},{ nameOfVertex: "Renascer", weight: 2.8},{ nameOfVertex: "Primeira Linha", weight: 3.6}], 1));
dijkstra.addVertex(new Vertex("Renascer",
[{ nameOfVertex: "Primeira Linha", weight: 4.0},{ nameOfVertex: "Recanto Verde", weight: 1.9},{ nameOfVertex: "Fábio Silva", weight: 2.1},{ nameOfVertex: "São Marcos", weight: 2.1},{ nameOfVertex: "Ana Maria", weight: 2.8},{ nameOfVertex: "Argentina", weight: 2.9},{ nameOfVertex: "Jardim Paineiras", weight: 3.1},{ nameOfVertex: "São Luiz", weight: 5.2}], 1));
dijkstra.addVertex(new Vertex("Rio Maina",
[{ nameOfVertex: "Wosocris", weight: 1.5},{ nameOfVertex: "Catarinense", weight: 2.1},{ nameOfVertex: "Cidade Mineira", weight: 2.6},{ nameOfVertex: "Liberdade", weight: 1.9},{ nameOfVertex: "Vila Isabel", weight: 0.7}], 1));
dijkstra.addVertex(new Vertex("Sangão",
[{ nameOfVertex: "Primeira Linha", weight: 5.3},{ nameOfVertex: "Universitário", weight: 6.1},{ nameOfVertex: "Jardim Angélica", weight: 5.1},{ nameOfVertex: "Verdinho", weight: 8.3},{ nameOfVertex: "Pedro Zanivan", weight: 3.9},{ nameOfVertex: "Morro Estêvão", weight: 4.2}], 1));
dijkstra.addVertex(new Vertex("Santa Augusta",
[{ nameOfVertex: "São Francisco", weight: 1.3},{ nameOfVertex: "Mineira Velha", weight: 1.1},{ nameOfVertex: "Vila Manaus", weight: 1.9},{ nameOfVertex: "Jardim Angélica", weight: 2.4},{ nameOfVertex: "Paraíso", weight: 1.5},{ nameOfVertex: "Pinheirinho", weight: 1.7},{ nameOfVertex: "Universitário", weight: 1.0}], 1));
dijkstra.addVertex(new Vertex("Santa Bárbara",
[{ nameOfVertex: "Santo Antônio", weight: 2.0},{ nameOfVertex: "Pinheirinho", weight: 3.2},{ nameOfVertex: "Vila Floresta", weight: 3.1},{ nameOfVertex: "Paraíso", weight: 2.9},{ nameOfVertex: "Centro", weight: 2.8},{ nameOfVertex: "Michel", weight: 1.3},{ nameOfVertex: "Operária Nova", weight: 1.3},{ nameOfVertex: "Santa Catarina", weight: 2.5},{ nameOfVertex: "São Cristóvão", weight: 1.8}], 1));
dijkstra.addVertex(new Vertex("Santa Catarina",
[{ nameOfVertex: "Operária Nova", weight: 1.7},{ nameOfVertex: "Maria Céu", weight: 1.3},{ nameOfVertex: "Santa Bárbara", weight: 2.5},{ nameOfVertex: "Centro", weight: 3.6},{ nameOfVertex: "Maria Céu", weight: 1.3},{ nameOfVertex: "Vera Cruz", weight: 2.8}], 1));
dijkstra.addVertex(new Vertex("Santa Luzia",
[{ nameOfVertex: "Jardim União", weight: 0.74},{ nameOfVertex: "Promorar Vila Vitoria", weight: 0.95},{ nameOfVertex: "Vila Manaus", weight: 1.3},{ nameOfVertex: "Universitário", weight: 2.5},{ nameOfVertex: "Progresso", weight: 0.65},{ nameOfVertex: "Vila Rica", weight: 1.3}], 1));
dijkstra.addVertex(new Vertex("Santo Antônio",
[{ nameOfVertex: "Vila Floresta II", weight: 2.9},{ nameOfVertex: "Vila Floresta", weight: 3.3},{ nameOfVertex: "Paraíso", weight: 4.2},{ nameOfVertex: "Maria Céu", weight: 2.4},{ nameOfVertex: "Operária Nova", weight: 1.8},{ nameOfVertex: "Pinheirinho", weight: 2.4},{ nameOfVertex: "Santa Bárbara", weight: 2.0}], 1));
dijkstra.addVertex(new Vertex("Santos Dumont",
[{ nameOfVertex: "Santa Bárbara", weight: 1.8},{ nameOfVertex: "Pinheirinho", weight: 2.6},{ nameOfVertex: "Milanese", weight: 0.28},{ nameOfVertex: "São Luiz", weight: 1.8},{ nameOfVertex: "Recanto Verde", weight: 2.1},{ nameOfVertex: "Michel", weight: 2.1},{ nameOfVertex: "Fábio Silva", weight: 1.7}], 1));
dijkstra.addVertex(new Vertex("São Cristóvão",
[{ nameOfVertex: "Comerciário", weight: 1.1},{ nameOfVertex: "Pio Corrêa", weight: 1.4},{ nameOfVertex: "Centro", weight: 1.3},{ nameOfVertex: "Próspera", weight: 2.1},{ nameOfVertex: "Centro", weight: 1.3},{ nameOfVertex: "Ceará", weight: 1.4}], 1));
dijkstra.addVertex(new Vertex("São Defende",
[{ nameOfVertex: "Cidade Mineira", weight:5 },{ nameOfVertex: "São Sebastião", weight:4.2 },{ nameOfVertex: "Mineira Nova", weight:5.6 },{ nameOfVertex: "Conjunto H. Nova Esperança", weight:4.6 }], 1));
dijkstra.addVertex(new Vertex("São Francisco",
[{ nameOfVertex: "Boa Vista", weight: 949},{ nameOfVertex: "Liberdade", weight: 1},{ nameOfVertex: "Imperatriz", weight: 0.7},{ nameOfVertex: "Mineira Velha", weight: 1.3},{ nameOfVertex: "Paraíso", weight: 1.2},{ nameOfVertex: "Santa Augusta", weight: 1.3}], 1));
dijkstra.addVertex(new Vertex("São João",
[{ nameOfVertex: "Renascer", weight: 5.2},{ nameOfVertex: "Jardim Paineiras", weight: 2},{ nameOfVertex: "Cristo Redentor", weight: 5.3},{ nameOfVertex: "Ana Maria", weight: 4.0}], 1));
dijkstra.addVertex(new Vertex("São Luiz",
[{ nameOfVertex: "Michel", weight: 1},{ nameOfVertex: "Santos Dumont", weight: 1.8},{ nameOfVertex: "Milanese", weight: 1.4},{ nameOfVertex: "Renascer", weight: 3.9},{ nameOfVertex: "Recanto Verde", weight: 2.1},{ nameOfVertex: "Fábio Silva", weight: 0.75},{ nameOfVertex: "Ceará", weight: 4.1}], 1));
dijkstra.addVertex(new Vertex("São Marcos",
[{ nameOfVertex: "Vila Nova Esperança", weight: 0.9},{ nameOfVertex: "Metropol", weight: 1.1}], 1));
dijkstra.addVertex(new Vertex("São Sebastião",
[{ nameOfVertex: "Mineira Nova", weight: 1.6},{ nameOfVertex: "Vila Belmiro", weight: 1.6},{ nameOfVertex: "Jardim União", weight: 1.1},{ nameOfVertex: "Progresso", weight: 1.1},{ nameOfVertex: "São Defende", weight: 4.2}], 1));
dijkstra.addVertex(new Vertex("São Simão",
[{ nameOfVertex: "Argentina", weight: 6.2},{ nameOfVertex: "Mina Brasil", weight: 6.6},{ nameOfVertex: "Linha Batista", weight: 3.4}], 1));
dijkstra.addVertex(new Vertex("Universitário",
[{ nameOfVertex: "Santa Augusta", weight: 1.0},{ nameOfVertex: "Mineira Velha", weight: 2.3},{ nameOfVertex: "Vila Manaus", weight: 1.8},{ nameOfVertex: "Santa Luzia", weight: 2.5},{ nameOfVertex: "Vila Nova Esperança", weight: 3.3},{ nameOfVertex: "Sangão", weight: 6.1},{ nameOfVertex: "Primeira Linha", weight: 6.8},{ nameOfVertex: "Jardim Angélica", weight: 2.8}], 1));
dijkstra.addVertex(new Vertex("Vera Cruz",
[{ nameOfVertex: "Maria Céu", weight: 2.5},{ nameOfVertex: "Santa Catarina", weight: 2.8},{ nameOfVertex: "Lote Seis", weight: 1.7},{ nameOfVertex: "Cruzeiro Do Sul", weight: 2.4},{ nameOfVertex: "Centro", weight: 1.8},{ nameOfVertex: "Arquimedes Napolini", weight: 2.6}], 1));
dijkstra.addVertex(new Vertex("Verdinho",
[{ nameOfVertex: "Sangão", weight: 8.3},{ nameOfVertex: "Quarta Linha", weight: 9.7},{ nameOfVertex: "Dagostin", weight: 9.4}], 1));
dijkstra.addVertex(new Vertex("Vila Belmiro",
[{ nameOfVertex: "Mineira Nova", weight: 0.9},{ nameOfVertex: "Imperatriz", weight: 1.3},{ nameOfVertex: "São Sebastião", weight: 1.6},{ nameOfVertex: "Promorar Vila Vitoria", weight: 0.6},{ nameOfVertex: "Progresso", weight: 1.3},{ nameOfVertex: "Mineira Velha", weight: 1.6},{ nameOfVertex: "Jardim União", weight: 1.1}], 1));
dijkstra.addVertex(new Vertex("Vila Floresta",
[{ nameOfVertex: "Vila Floresta II", weight: 1.1},{ nameOfVertex: "Paraíso", weight: 1.6},{ nameOfVertex: "Boa Vista", weight: 1},{ nameOfVertex: "Pinheirinho", weight: 3.1},{ nameOfVertex: "Primeira Linha", weight: 3.1},{ nameOfVertex: "Santo Antônio", weight: 3.3}], 1));
dijkstra.addVertex(new Vertex("Vila Floresta II",
[{ nameOfVertex: "Boa Vista", weight:1.1 },{ nameOfVertex: "Monte Castelo", weight:1.6 },{ nameOfVertex: "Vila Zuleima", weight:1.3 },{ nameOfVertex: "Vila Francesa", weight:1.4 },{ nameOfVertex: "Liberdade", weight:1.6 },{ nameOfVertex: "Maria Céu", weight: 2.9},{ nameOfVertex: "Santo Antônio", weight: 2.9},{ nameOfVertex: "Vila Floresta", weight: 1.1}], 1));
dijkstra.addVertex(new Vertex("Vila Francesa",
[{ nameOfVertex: "Vila Isabel", weight: 1.6},{ nameOfVertex: "Rio Maina", weight: 1.3},{ nameOfVertex: "Vila São José", weight: 3.2},{ nameOfVertex: "Wosocris", weight: 2.1},{ nameOfVertex: "Catarinense", weight: 2.8},{ nameOfVertex: "Distrito Industrial", weight: 2.1},{ nameOfVertex: "Liberdade", weight: 1.9},{ nameOfVertex: "Monte Castelo", weight: 1.6},{ nameOfVertex: "Vila Floresta II", weight: 1.4},{ nameOfVertex: "Vila Zuleima", weight: 0.55}], 1));
dijkstra.addVertex(new Vertex("Vila Isabel",
[{ nameOfVertex: "Wosocris", weight: 1.2},{ nameOfVertex: "Rio Maina", weight: 0.7},{ nameOfVertex: "Vila Macarini", weight: 1.5},{ nameOfVertex: "Vila Visconde", weight: 2.5},{ nameOfVertex: "Vila Francesa", weight: 1.6},{ nameOfVertex: "Mineira Nova", weight: 2.9},{ nameOfVertex: "Liberdade", weight: 2.3},{ nameOfVertex: "Distrito Industrial", weight: 1.9},{ nameOfVertex: "Cidade Mineira", weight: 2.3}], 1));
dijkstra.addVertex(new Vertex("Vila Macarini",
[{ nameOfVertex: "Catarinense", weight: 1.2},{ nameOfVertex: "Vila Visconde", weight: 1.3},{ nameOfVertex: "Vila São José", weight: 2.3},{ nameOfVertex: "Wosocris", weight: 0.45},{ nameOfVertex: "Vila Isabel", weight: 1.5},{ nameOfVertex: "Cidade Mineira", weight: 2.4}], 1));
dijkstra.addVertex(new Vertex("Vila Manaus",
[{ nameOfVertex: "Promorar Vila Vitoria", weight: 0.74},{ nameOfVertex: "Mineira Velha", weight: 0.8},{ nameOfVertex: "Universitário", weight: 1.8},{ nameOfVertex: "Santa Luzia", weight: 1.3},{ nameOfVertex: "Santa Augusta", weight: 1.9},{ nameOfVertex: "Laranjinha", weight: 1.6}], 1));
dijkstra.addVertex(new Vertex("Vila Miguel",
[{ nameOfVertex: "Metropol", weight: 0.74},{ nameOfVertex: "São Sebastião", weight: 0.9},{ nameOfVertex: "Estaçãozinha", weight: 1.0}], 1));
dijkstra.addVertex(new Vertex("Vila Nova Esperança",
[{ nameOfVertex: "Conjunto H. Nova Esperança", weight:0.34 },{ nameOfVertex: "Progresso", weight:2.2 },{ nameOfVertex: "Santa Luzia", weight:1.3 },{ nameOfVertex: "Vera Cruz", weight: 3.3}], 1));
dijkstra.addVertex(new Vertex("Vila Rica",
[{ nameOfVertex: "Próspera", weight: 3.1},{ nameOfVertex: "Nossa Senhora Da Salete", weight: 3.2},{ nameOfVertex: "Linha Batista", weight: 4.3},{ nameOfVertex: "Brasília", weight: 1.9},{ nameOfVertex: "Argentina", weight: 2.2}], 1));
dijkstra.addVertex(new Vertex("Vila São José",
[{ nameOfVertex: "Estaçãozinha", weight: 0.6},{ nameOfVertex: "Metropol", weight: 1.3},{ nameOfVertex: "Wosocris", weight: 2.0},{ nameOfVertex: "Vila Visconde", weight: 2.1},{ nameOfVertex: "Vila Macarini", weight: 2.3},{ nameOfVertex: "Catarinense", weight: 1.2}], 1));
dijkstra.addVertex(new Vertex("Vila Visconde",
[{ nameOfVertex: "Catarinense", weight:1.7 },{ nameOfVertex: "Colonial", weight:1.2 },{ nameOfVertex:"Vila São José" , weight:2.1 },{ nameOfVertex: "Metropol", weight:2.3 },{ nameOfVertex: "Vila Macarini", weight: 1.3},{ nameOfVertex: "Vila Isabel", weight: 2.5},{ nameOfVertex: "Cidade Mineira", weight: 3.5}], 1));
dijkstra.addVertex(new Vertex("Vila Zuleima",
[{ nameOfVertex: "Vila Francesa", weight:0.54 },{ nameOfVertex: "Vila Floresta II", weight: 1.3}], 1));
dijkstra.addVertex(new Vertex("Wosocris",
[{ nameOfVertex: "Vila Macarini", weight: 0.44},{ nameOfVertex: "Catarinense", weight: 1.1},{ nameOfVertex: "Vila São José", weight: 2},{ nameOfVertex: "Vila Isabel", weight: 1.2},{ nameOfVertex: "Vila Francesa", weight: 2.1},{ nameOfVertex: "Rio Maina", weight: 1.5},{ nameOfVertex: "Cidade Mineira", weight: 2.2}], 1));
    }

    findShortestWay(district) {
        return dijkstra.findShortestWay(district, "Comerciário");

    }
}
