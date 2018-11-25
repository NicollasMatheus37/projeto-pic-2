import { Injectable } from '@angular/core';

@Injectable()
export class DistancesModuleService {

  protected name = "distances";

  /* exemplo de variável a ser adicionada */
  public distances = [ /* objeto */
    //Ana Maria
    [{destino: 14, distance: 3.7},{destino: 67, distance: 4.0},{destino: 55, distance: 2.8}],
    //Argentina
    [{destino: 84, distance: 2.2},{destino: 5, distance: 1.6},{destino: 52, distance: 2.9}],
    //Arquimedes Naspolini
    [{destino: 36, distance: 1.6},{destino: 73, distance: 2.6}],
    //Boa Vista
    [{destino: 27, distance: 0.84}],
    //Brasília
    [{destino: 52, distance: 1.6},{destino: 84, distance: 1.9}],
    //Catarinense
    [{destino: 85, distance: 1.2},{destino: 32, distance: 2.3}],
    //Ceará
    [{destino: 64, distance: 1.4},{destino: 69, distance: 4.1},{destino: 33, distance: 3.7}],
    //Centro
    [{destino: 30, distance: 1.6},{destino: 73, distance: 1.8},{destino: 43, distance: 3.0},{destino: 60, distance: 3.6},{destino: 59, distance: 2.8}],
    //Cidade Mineira
    [{destino: 79, distance: 2.3},{destino: 56, distance: 2.6},{destino: 88, distance: 2.2},{destino: 80, distance: 2.4},{destino: 86, distance: 3.5}],
    //Colonial
    [{ destino: 48, distance: 1.2}],
    //Coloninha Zilli
    [{ destino: 26, distance: 3.2},{ destino: 40, distance: 2.1},{ destino: 31, distance: 2.1}],
    //Comerciário
    [{ destino: 33, distance: 1.2},{ destino: 8, distance: 1.6},{ destino: 47, distance: 1.9}],
    //Conjunto Habitacional Nova Esperança
    [{ destino: 50, distance: 1.9}],
    //Cristo Redentor
    [{ destino: 67, distance: 5.3}],
    //Cruzeiro do Sul
    [{ destino: 35, distance:1.8 },{ destino: 30, distance: 2.2},{ destino: 73, distance: 2.4},{ destino: 8, distance: 1.7}],
    //Dagostin
    [{ destino: 53, distance: 3.1},{ destino: 74, distance: 9.4}],
    //Distrito Industrial
    [{ destino: 79, distance: 1.9},{ destino: 9, distance: 2.2},{ destino: 77, distance: 2.1}],
    //Estaçãozinha
    [{ destino: 82, distance: 1.0},{ destino: 32, distance: 1.6}],
    //Fábio Silva
    [{ destino: 69, distance: 0.74},{ destino: 63, distance: 1.7},{ destino: 34, distance: 1.5}],
    //Imigrantes
    [{ destino: 29, distance: 2.3}],
    //Imperatriz
    [{ destino: 38, distance: 0.7},{ destino: 66, distance: 0.7},{ destino: 27, distance: 1.4},{ destino: 4, distance: 1.5}],
    //Jardim Angélica
    [{ destino: 72, distance: 2.8},{ destino: 58, distance: 2.4}],
    //Jardim Maristela
    [{ destino: 28, distance: 1.0},{ destino: 7, distance: 1.6},{ destino: 1, distance: 1.1}],
    //Jardim Paineiras
    [{ destino: 55, distance: 3.1},{ destino: 49, distance: 1.6},{ destino: 54, distance: 2.7},{ destino: 19, distance: 3.5},{ destino: 45, distance: 2.6},{ destino: 41, distance: 3.2}],
    //Jardim União
    [{ destino: 51, distance: 1.0},{ destino: 75, distance: 1.1},{ destino: 81, distance: 1.6}],
    //Laranjinha
    [{ destino: 18, distance: 1.2}],
    //Liberdade
    [{ destino: 77, distance: 1.9},{ destino: 17, distance: 1.9},{ destino: 79, distance: 2.3},{ destino: 56, distance: 1.9}],
    //Linha Anta
    [{ destino: 7, distance: 1.8},{ destino: 1, distance: 1.3},{ destino: 23, distance: 4.2}],
    //Linha Batista
    [{ destino: 84, distance: 4.3},{ destino: 71, distance: 3.4},{ destino: 2, distance: 2.0}],
    //Lote Seis 
    [{ destino: 3, distance: 2.4},{ destino: 73, distance: 1.7}],
    //Maria Ceu
    [{ destino: 40, distance: 3.1},{ destino: 77, distance: 2.9},{ destino: 62, distance: 2.4}],
    //Metropol
    [{ destino: 70, distance: 1.1}],
    //Michel
    [{ destino: 63, distance: 2.1},{ destino: 59, distance: 1.3},{ destino: 43, distance: 2.4},{ destino: 8, distance: 2.3},{ destino: 47, distance: 2.7}],
    //Milanese
    [{ destino: 46, distance: 2.8},{ destino: 22, distance: 4.0}],
    //Mina do Brasil
    [{ destino: 46, distance: 3.7},{ destino: 30, distance: 2.1}],
    //Mina do Mato
    [{ destino: 11, distance: 1.9},{ destino: 26, distance: 5.3},{ destino: 31, distance: 2.8},{ destino: 70, distance: 5.9}],
    //Mina União
    [{ destino: 27, distance: 1.3},{ destino: 38, distance: 1.3},{ destino: 17, distance: 1.3},{ destino: 79, distance: 1.6}],
    //Mineira Velha 
    [{ destino: 51, distance: 1.3},{ destino: 75, distance: 1.6},{ destino: 38, distance: 1.2},{ destino: 21, distance: 0.8},{ destino: 66, distance: 1.3}],
    //Monte Castelo
    [{ destino: 87, distance: 0.74},{ destino: 77, distance: 1.6},{ destino: 85, distance: 2.9}],
    //Morro Estevão
    [{ destino: 16, distance: 2.4},{ destino: 57, distance: 4.2}],
    //Nossa Senhora da Salete
    [{ destino: 7, distance: 3.1},{ destino: 23, distance: 2.9},{ destino: 28, distance: 3.7},{ destino: 1, distance: 3.2},{ destino: 14, distance: 3.6}],
    //Operária Nova
    [{ destino: 59, distance: 1.3},{ destino: 31, distance: 1.2},{ destino: 62, distance: 1.8}],
    //Paraíso
    [{ destino: 4, distance: 1},{ destino: 22, distance: 3.6},{ destino: 58, distance: 1.5},{ destino: 66, distance: 1.2}],
    //Pedro Zanivan
    [{ destino: 41, distance: 1.9},{ destino: 57, distance: 3.9}],
    //Pinheirinho
    [{ destino: 62, distance: 2.4},{ destino: 76, distance: 3.1},{ destino: 44, distance: 2.0},{ destino: 22, distance: 2.6},{ destino: 58, distance: 1.7}],
    //Pio Corrêa
    [{ destino: 8, distance: 1.1},{ destino: 15, distance: 1.6}],
    //Poço Um
    [{ destino: 32, distance: 1.3}],
    //Primeira Linha
    [{ destino: 54, distance: 3.6},{ destino: 22, distance: 5.8},{ destino: 72, distance: 6.8}],
    //Progresso
    [{ destino: 25, distance: 0.17},{ destino: 61, distance: 0.64},{ destino: 51, distance: 1.1},{ destino: 75, distance: 1.3}],
    //Promorar Vila Vitória
    [{ destino: 75, distance: 0.6},{ destino: 38, distance: 1.2},{ destino: 21, distance: 1.7}],
    //Próspera
    [{ destino: 64, distance: 2.1},{ destino: 47, distance: 1.8},{ destino: 15, distance: 3.0},{ destino: 35, distance: 4.2},{ destino: 7, distance: 2.4},{ destino: 42, distance: 2.6}],
    //Quarta Linha
    [{ destino: 74, distance: 9.7}],
    //Recanto Verde
    [{ destino: 19, distance: 1.8},{ destino: 34, distance: 1.9},{ destino: 63, distance: 2.1},{ destino: 69, distance: 2.1}],
    //Renascer
    [{ destino: 49, distance: 4.0},{ destino: 54, distance: 1.9},{ destino: 19, distance: 2.1},{ destino: 69, distance: 2.1}],
    //Rio Maina
    [{ destino: 88, distance: 1.5},{ destino: 6, distance: 2.1}],
    //Sangão
    [{ destino: 49, distance: 5.3},{ destino: 72, distance: 6.1},{ destino: 22, distance: 5.1}],
    //Santa Augusta
    [{ destino: 66, distance: 1.3},{ destino: 39, distance: 1.1},{ destino: 81, distance: 1.9}],
    //Santa Bárbara
    [{ destino: 62, distance: 2.0},{ destino: 46, distance: 3.2},{ destino: 76, distance: 3.1},{ destino: 44, distance: 2.9}],
    //Santa Catarina
    [{ destino: 43, distance: 1.7},{ destino: 31, distance: 1.3},{ destino: 59, distance: 2.5}],
    //Santa Luzia
    [{ destino: 25, distance: 0.74},{ destino: 51, distance: 0.95},{ destino: 81, distance: 1.3}],
    //Santo Antônio
    [{ destino: 77, distance: 2.9},{ destino: 76, distance: 3.3},{ destino: 44, distance: 4.2}],
    //Santos Dumont
    [{ destino: 59, distance: 1.8},{ destino: 46, distance: 2.6},{ destino: 34, distance: 0.27}],
    //São Cristóvão
    [{ destino: 12, distance: 1.1},{ destino: 47, distance: 1.4},{ destino: 8, distance: 1.3}],
    //São Defende
    [{ destino: 9, distance:5 },{ destino: 70, distance:4.2 },{ destino: 38, distance:5.6 },{ destino: 13, distance:4.6 }],
    //São Francisco
    [{ destino: 4, distance: 949},{ destino: 27, distance: 1}],
    //São João
    [{ destino: 55, distance: 5.2},{ destino: 24, distance: 2}],
    //São Luiz
    [{ destino: 33, distance: 1},{ destino: 63, distance: 1.8},{ destino: 34, distance: 1.4}],
    //São Marcos
    //São Sebastião
    [{ destino: 38, distance: 1.6},{ destino: 75, distance: 1.6},{ destino: 25, distance: 1.1},{ destino: 50, distance: 1.1}],
    //São Simão
    [{ destino: 2, distance: 6.2},{ destino: 35, distance: 6.6}],
    //Universitário
    [{ destino: 58, distance: 1.0},{ destino: 39, distance: 2.3},{ destino: 81, distance: 1.8},{ destino: 61, distance: 2.5},{ destino: 83, distance: 3.3}],
    //Vera Cruz
    [{ destino: 31, distance: 2.5},{ destino: 60, distance: 2.8}],
    //Verdinho
    [{ destino: 57, distance: 8.3}],
    //Vila Belmiro
    [{ destino: 38, distance: 0.9},{ destino: 38, distance: 0.9},{ destino: 21, distance: 1.3}],
    //Vila Floresta
    [{ destino: 77, distance: 1.1},{ destino: 44, distance: 1.6},{ destino: 4, distance: 1}],
    //Vila Floresta II
    [{ destino: 4, distance:1.1 },{ destino: 40, distance:1.6 },{ destino: 87, distance:1.3 },{ destino: 78, distance:1.4 },{ destino: 27, distance:1.6 }],
    //Vila Francesa
    [{ destino: 79, distance: 1.6},{ destino: 56, distance: 1.3},{ destino: 85, distance: 3.2},{ destino: 88, distance: 2.1},{ destino: 6, distance: 2.8}],
    //Vila Isabel
    [{ destino: 88, distance: 1.2},{ destino: 56, distance: 0.7},{ destino: 80, distance: 1.5},{ destino: 86, distance: 2.5}],
    //Vila Macarini
    [{ destino: 6, distance: 1.2},{ destino: 86, distance: 1.3},{ destino: 85, distance: 2.3}],
    //Vila Manaus
    [{ destino: 51, distance: 0.74},{ destino: 39, distance: 0.8}],
    //Vila Miguel
    [{ destino: 32, distance: 0.74},{ destino: 70, distance: 0.9}],
    //Vila Nova Esperança
    [{ destino: 13, distance:0.34 },{ destino: 50, distance:2.2 },{ destino: 61, distance:1.3 }],
    //Vila Rica
    [{ destino: 52, distance: 3.1},{ destino: 42, distance: 3.2}],
    //Vila São José
    [{ destino: 18, distance: 0.6},{ destino: 32, distance: 1.3}],
    //Vila Visconde
    [{ destino:6 , distance:1.7 },{ destino:10 , distance:1.2 },{ destino:85 , distance:2.1 },{ destino:32 , distance:2.3 }],
    //Vila Zuleima
    [{ destino: 78, distance:0.54 }],
    //Wosocris
    [{ destino: 80, distance: 0.44},{ destino: 6, distance: 1.1},{ destino: 85, distance: 2}]
  ]

  constructor() { }

  getDistanceOf(index) {
    for(let i = 0; i < this.distances.length; i++) {
      if(i == index) {
        return this.distances[i];
      }
    }
  }
}
