import { Injectable } from '@angular/core';
import { DijkstraService } from './dijkstra.service';
import { DistancesModuleService } from './distances-module.service';

@Injectable()
export class GetDistancesService {

    public valorMaximo = Number.MAX_VALUE; //valor com que os grafos devem ser iniciados

    public exemploVertice = [
    /* 0 */[{destino: 1, distancia: 5},{destino: 2, distancia: 10}],
    /* 1 */[{destino: 3, distancia: 5},{destino: 6, distancia: 5}],
    /* 2 */[{destino: 1, distancia: 5},{destino: 3, distancia: 10}],
    /* 3 */[{destino: 4, distancia: 5},{destino: 5, distancia: 5}],
    /* 4 */[{destino: 5, distancia: 10}],
    /* 5 */[{destino: null, distancia: null}],
    /* 6 */[{destino: 5, distancia: 10}]
    ]

    public qtdArestas = 0;

    public caminhoPercorrido = {
        rota: Array(), //adicionar os pontos que foram visitados
        distancia: 0 //distancia para o vertice inicial = 0 e todos os outros é infinito
    }
    public caminhoMaisCurto = {
        caminho: {},
        proximo: -1
    }
    public verticeAnterior;
    public menorDistancia;
        //guardar caminho mais curto encontrado durante o relaxamento das arestas
        //estimativa: valorMaximo {
        // se x maior que estimativa continua
        // se x menor que estimativa valorMaximo = x.distancia
        // }
    //recebe vertice que será o inicial.
    //receba todas suas adjacências
    //guardar valor da aresta anterior
    //distancia até a aresta anterior não pode ser calculada
    //somar valor da distancia atual até o ponto x + valor até pontos adjacentes procurando o menor deles
    
    teste() {
        let verticeInicial = this.exemploVertice[0];
        // console.log('inicial: ', verticeInicial);
        let indexVerticeFinal = 5;
        // console.log('final: ', verticeFinal);
        this.recebeVertice(verticeInicial,indexVerticeFinal); //procura o valor final a partir do valor inicial usando recursividade
        // console.log('caminhoPercorrido: ', this.caminhoPercorrido);
    }

    recebeVertice(verticeInicial, indexVerticeFinal) {
        // console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH');
        let k = 0;
        if(k == 2) {
            return;
        }
        k++;
        let a = 1;
        //se vertice inicial e final forem iguais, chega ao destino (condição da recursividade)
        this.menorDistancia = this.valorMaximo; //inicia o valor mais curto com o valorMaximo
        // console.log('menor distancia: ', this.menorDistancia);
        // console.log('tamanho vertice inicial: ', verticeInicial.length);
        for(let i = 0; i < verticeInicial.length; i++) {
            if(verticeInicial[i].destino == this.verticeAnterior) {
                console.log('verticeInicial: ', verticeInicial[i]);
                return;
            }
            if(verticeInicial[i].destino == indexVerticeFinal) {
                console.log('terminou');
                this.caminhoMaisCurto.caminho = verticeInicial[i];
                this.caminhoMaisCurto.proximo = verticeInicial[i].destino;
                a = 0;
                break; //verificar retorno
            }
            // console.log('vertice Inicial [',i,']: ', verticeInicial[i]);
            if(verticeInicial[i].distancia < this.menorDistancia) { //erro na condição de igualdade com 2 valores de distância identica
                this.menorDistancia = verticeInicial[i].distancia;
                // console.log('menorDistancia: ',this.menorDistancia);
                this.caminhoMaisCurto.caminho = verticeInicial[i];
                // console.log('caminhoMaisCurto.caminho: ',this.caminhoMaisCurto.caminho);
                this.caminhoMaisCurto.proximo = verticeInicial[i].destino;
                // console.log('caminhoMaisCurto.proximo: ',this.caminhoMaisCurto.proximo);
            }
        }
        console.log('caminho mais curto: ', this.caminhoMaisCurto);
        let proximoCaminho = this.exemploVertice[this.caminhoMaisCurto.proximo];
        // console.log('proximoCaminho: ', proximoCaminho);
        this.verticeAnterior = this.caminhoMaisCurto.caminho['distancia'];
        console.log(this.verticeAnterior)
        this.caminhoPercorrido.rota.push(this.caminhoMaisCurto);
        this.caminhoPercorrido.distancia += this.menorDistancia;
        if(a != 0) {
            this.recebeVertice(proximoCaminho, indexVerticeFinal);
        }
    }
}