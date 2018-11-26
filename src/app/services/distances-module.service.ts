import { Injectable } from '@angular/core';

@Injectable()
export class DistancesModuleService {

  protected name = "distances";

  /* exemplo de variável a ser adicionada */
  public distances = [ /* objeto */
    //Ana Maria
    [{destino: 14, distance: 3.7},{destino: 67, distance: 4.0},{destino: 55, distance: 2.8},{destino: 23, distance: 1.1},{destino: 28, distance: 1.3},{destino: 43, distance: 3.2}],
    //Argentina
    [{destino: 84, distance: 2.2},{destino: 5, distance: 1.6},{destino: 52, distance: 2.9},{destino: 29, distance: 2.0},{destino: 71, distance: 6.2}],
    //Arquimedes Naspolini
    [{destino: 36, distance: 1.6},{destino: 73, distance: 2.6},{destino: 30, distance: 2.4},{destino: 35, distance: 3.7}],
    //Boa Vista
    [{destino: 27, distance: 0.84},{destino: 21, distance: 1.5},{destino: 44, distance: 1.0},{destino: 66, distance: 0.95},{destino: 76, distance: 1.0},{destino: 77, distance: 1.1}],
    //Brasília
    [{destino: 52, distance: 1.6},{destino: 84, distance: 1.9},{destino: 2, distance: 1.6}],
    //Catarinense
    [{destino: 85, distance: 1.2},{destino: 32, distance: 2.3},{destino: 56, distance: 2.1},{destino: 78, distance: 2.8},{destino: 80, distance: 1.2},{destino: 86, distance: 1.7},{destino: 88, distance: 1.1},],
    //Ceará
    [{destino: 64, distance: 1.4},{destino: 69, distance: 4.1},{destino: 33, distance: 3.7},{destino: 23, distance: 1.6},{destino: 28, distance: 1.8},{destino: 42, distance: 3.1},{destino: 52, distance: 2.4}],
    //Centro
    [{destino: 30, distance: 1.6},{destino: 73, distance: 1.8},{destino: 43, distance: 3.0},{destino: 60, distance: 3.6},{destino: 59, distance: 2.8},{destino: 12, distance: 1.6},{destino: 15, distance: 1.7},{destino: 33, distance: 2.3},{destino: 47, distance: 1.1},{destino: 64, distance: 1.3}],
    //Cidade Mineira
    [{destino: 79, distance: 2.3},{destino: 56, distance: 2.6},{destino: 88, distance: 2.2},{destino: 80, distance: 2.4},{destino: 86, distance: 3.5},{destino: 17, distance: 2.2},{destino: 37, distance: 1.6},{destino: 65, distance: 5.0}],
    //Colonial
    [{ destino: 48, distance: 1.2},{destino: 86, distance: 1.2}],
    //Coloninha Zilli
    [{ destino: 26, distance: 3.2},{ destino: 40, distance: 2.1},{ destino: 31, distance: 2.1},{destino: 36, distance: 1.9}],
    //Comerciário
    [{ destino: 33, distance: 1.2},{ destino: 8, distance: 1.6},{ destino: 47, distance: 1.9},{destino: 8, distance: 1.6},{destino: 64, distance: 1.1}],
    //Conjunto Habitacional Nova Esperança
    [{ destino: 50, distance: 1.9},{destino: 65, distance: 4.6},{destino: 84, distance: 0.35}],
    //Cristo Redentor
    [{ destino: 67, distance: 5.3},{destino: 1, distance: 3.7},{destino: 42, distance: 3.6}],
    //Cruzeiro do Sul
    [{ destino: 35, distance:1.8 },{ destino: 30, distance: 2.2},{ destino: 73, distance: 2.4},{ destino: 8, distance: 1.7},{destino: 47, distance: 1.6},{destino: 52, distance: 3.0}],
    //Dagostin
    [{ destino: 53, distance: 3.1},{ destino: 74, distance: 9.4},{destino: 41, distance: 2.4}],
    //Distrito Industrial
    [{ destino: 79, distance: 1.9},{ destino: 9, distance: 2.2},{ destino: 77, distance: 2.1},{destino: 9, distance: 2.2},{destino: 37, distance: 1.6}],
    //Estaçãozinha
    [{ destino: 82, distance: 1.0},{ destino: 32, distance: 1.6},{destino: 26, distance: 1.2},{destino: 85, distance: 0.6}],
    //Fábio Silva
    [{ destino: 69, distance: 0.75},{ destino: 63, distance: 1.7},{ destino: 34, distance: 1.5},{destino: 24, distance: 3.5},{destino: 54, distance: 1.8},{destino: 55, distance: 3.7}],
    //Imigrantes
    [{ destino: 29, distance: 2.3}],
    //Imperatriz
    [{ destino: 38, distance: 0.7},{ destino: 66, distance: 0.7},{ destino: 27, distance: 1.4},{ destino: 4, distance: 1.5},{destino: 39, distance: 0.8},{destino: 51, distance: 1.7},{destino: 75, distance: 1.3}],
    //Jardim Angélica
    [{ destino: 72, distance: 2.8},{ destino: 58, distance: 2.4},{destino: 34, distance: 4.0},{destino: 44, distance: 3.6},{destino: 46, distance: 2.6},{destino: 49, distance: 5.8},{destino: 57, distance: 5.1}],
    //Jardim Maristela
    [{ destino: 28, distance: 1.0},{ destino: 7, distance: 1.6},{ destino: 1, distance: 1.1},{destino: 42, distance: 2.9}],
    //Jardim Paineiras
    [{ destino: 55, distance: 3.1},{ destino: 49, distance: 1.6},{ destino: 54, distance: 2.7},{ destino: 19, distance: 3.5},{ destino: 45, distance: 2.6},{ destino: 41, distance: 3.2},{destino: 67, distance: 2.0}],
    //Jardim União
    [{ destino: 51, distance: 1.0},{ destino: 75, distance: 1.1},{ destino: 81, distance: 1.6},{destino: 50, distance: 0.17},{destino: 61, distance: 0.75},{destino: 70, distance: 1.1}],
    //Laranjinha
    [{ destino: 18, distance: 1.2},{destino: 36, distance: 5.3},{destino: 11, distance: 3.2}],
    //Liberdade
    [{ destino: 77, distance: 1.9},{ destino: 17, distance: 1.9},{ destino: 79, distance: 2.3},{ destino: 56, distance: 1.9},{destino: 21, distance: 1.4},{destino: 38, distance: 1.3},{destino: 66, distance: 1.0},{destino: 77, distance: 1.6}],
    //Linha Anta
    [{ destino: 7, distance: 1.8},{ destino: 1, distance: 1.3},{ destino: 23, distance: 4.2},{destino: 23, distance: 1.0},{destino: 42, distance: 3.7}],
    //Linha Batista
    [{ destino: 84, distance: 4.3},{ destino: 71, distance: 3.4},{ destino: 2, distance: 2.0},{destino: 29, distance: 2.3}],
    //Lote Seis 
    [{ destino: 3, distance: 2.4},{ destino: 73, distance: 1.7},{destino: 8, distance: 1.6},{destino: 15, distance: 2.2},{destino: 35, distance: 2.1}],
    //Maria Ceu
    [{ destino: 40, distance: 3.1},{ destino: 77, distance: 2.9},{ destino: 62, distance: 2.4},{destino: 11, distance: 2.1},{destino: 36, distance: 2.8},{destino: 43, distance: 1.2},{destino: 60, distance: 1.3},{destino: 73, distance: 2.5}],
    //Metropol
    [{ destino: 69, distance: 1.1},{destino: 6, distance: 2.3},{destino: 18, distance: 1.6},{destino: 48, distance: 1.3},{destino: 82, distance: 0.75},{destino: 85, distance: 1.3},{destino: 86, distance: 2.3}],
    //Michel
    [{ destino: 63, distance: 2.1},{ destino: 59, distance: 1.3},{ destino: 43, distance: 2.4},{ destino: 8, distance: 2.3},{ destino: 47, distance: 2.7},{destino: 7, distance: 3.7},{destino: 12, distance: 1.2},{destino: 68, distance: 1.0}],
    //Milanese
    [{ destino: 46, distance: 2.8},{ destino: 22, distance: 4.0},{destino: 19, distance: 1.5},{destino: 54, distance: 1.9},{destino: 63, distance: 0.28},{destino: 68, distance: 1.4}],
    //Mina do Brasil
    [{ destino: 46, distance: 3.7},{ destino: 30, distance: 2.1},{destino: 15, distance: 1.8},{destino: 52, distance: 4.2},{destino: 71, distance: 6.6}],
    //Mina do Mato
    [{ destino: 11, distance: 1.9},{ destino: 26, distance: 5.3},{ destino: 31, distance: 2.8},{ destino: 70, distance: 5.9}],
    //Mina União
    [{ destino: 17, distance: 1.6},{ destino: 9, distance: 1.6},{ destino: 38, distance: 1.3},{ destino: 65, distance: 5.6},{destino: 70, distance: 1.6},{destino: 75, distance: 0.9}],
    //Minera Nova
    [{ destino: 27, distance: 1.3},{ destino: 37, distance: 1.3},{ destino: 16, distance: 1.6},{ destino: 79, distance: 2.9},{ destino: 21, distance: 0.7},{ destino: 39, distance: 1.2}],
    //Mineira Velha 
    [{ destino: 51, distance: 1.3},{ destino: 75, distance: 1.6},{ destino: 38, distance: 1.2},{ destino: 21, distance: 0.8},{ destino: 66, distance: 1.3},{ destino: 58, distance: 1.1},{ destino: 72, distance: 2.3},{ destino: 81, distance: 0.8}],
    //Monte Castelo
    [{ destino: 87, distance: 0.74},{ destino: 77, distance: 1.6},{ destino: 18, distance: 2.9},{ destino: 77, distance: 1.6},{ destino: 31, distance: 3.1},{ destino: 11, distance: 2.1}],
    //Morro Estevão
    [{ destino: 16, distance: 2.4},{ destino: 57, distance: 4.2},{ destino: 24, distance: 3.2},{ destino: 45, distance: 1.9}],
    //Nossa Senhora da Salete
    [{ destino: 7, distance: 3.1},{ destino: 23, distance: 2.9},{ destino: 28, distance: 3.7},{ destino: 1, distance: 3.2},{ destino: 14, distance: 3.6},{ destino: 52, distance: 2.6},{ destino: 84, distance: 3.2}],
    //Operária Nova
    [{ destino: 59, distance: 1.3},{ destino: 31, distance: 1.2},{ destino: 62, distance: 1.8},{ destino: 8, distance: 3.0},{ destino: 60, distance: 1.7},{ destino: 33, distance: 2.4}],
    //Paraíso
    [{ destino: 4, distance: 1},{ destino: 22, distance: 3.6},{ destino: 58, distance: 1.5},{ destino: 66, distance: 1.2},{ destino: 46, distance: 2.0},{ destino: 59, distance: 2.9},{ destino: 62, distance: 4.2},{ destino: 76, distance: 1.6}],
    //Pedro Zanivan
    [{ destino: 41, distance: 1.9},{ destino: 57, distance: 3.9},{ destino: 24, distance: 2.6}],
    //Pinheirinho
    [{ destino: 62, distance: 2.4},{ destino: 76, distance: 3.1},{ destino: 44, distance: 2.0},{ destino: 22, distance: 2.6},{ destino: 58, distance: 1.7},{ destino: 34, distance: 2.8},{ destino: 59, distance: 3.2},{ destino: 63, distance: 2.6}],
    //Pio Corrêa
    [{ destino: 8, distance: 1.1},{ destino: 15, distance: 1.6},{ destino: 12, distance: 1.9},{ destino: 33, distance: 2.7},{ destino: 64, distance: 1.4},{ destino: 52, distance: 1.8}],
    //Poço Um
    [ { destino: 32, distance: 1.3},{ destino: 10, distance: 1.2}],
    //Primeira Linha
    [{ destino: 54, distance: 3.6},{ destino: 22, distance: 5.8},{ destino: 72, distance: 6.8},{ destino: 24, distance: 1.6},{ destino: 57, distance: 5.3},{ destino: 55, distance: 4.0}],
    //Progresso
    [{ destino: 25, distance: 0.17},{ destino: 61, distance: 0.64},{ destino: 51, distance: 1.1},{ destino: 75, distance: 1.3},{ destino: 13, distance: 1.9},{ destino: 70, distance: 1.1},{ destino: 83, distance: 2.2}],
    //Promorar Vila Vitória
    [{ destino: 75, distance: 0.6},{ destino: 38, distance: 1.2},{ destino: 21, distance: 1.7},{ destino: 25, distance: 1.0},{ destino: 39, distance: 1.3},{ destino: 50, distance: 1.1},{ destino: 61, distance: 0.95},{ destino: 81, distance: 0.75}],
    //Próspera
    [{ destino: 64, distance: 2.1},{ destino: 47, distance: 1.8},{ destino: 15, distance: 3.0},{ destino: 35, distance: 4.2},{ destino: 7, distance: 2.4},{ destino: 42, distance: 2.6},{ destino: 84, distance: 3.1},{ destino: 5, distance: 1.6}],
    //Quarta Linha
    [{ destino: 74, distance: 9.7},{ destino: 16, distance: 3.1}],
    //Recanto Verde
    [{ destino: 19, distance: 1.8},{ destino: 34, distance: 1.9},{ destino: 63, distance: 2.1},{ destino: 68, distance: 2.1},{ destino: 24, distance: 2.7},{ destino: 55, distance: 2.8},{ destino: 49, distance: 3.6}],
    //Renascer
    [{ destino: 49, distance: 4.0},{ destino: 54, distance: 1.9},{ destino: 19, distance: 2.1},{ destino: 69, distance: 2.1},{ destino: 1, distance: 2.8},{ destino: 2, distance: 2.9},{ destino: 24, distance: 3.1},{ destino: 68, distance: 5.2}],
    //Rio Maina
    [{ destino: 88, distance: 1.5},{ destino: 6, distance: 2.1},{ destino: 9, distance: 2.6},{ destino: 27, distance: 1.9},{ destino: 79, distance: 0.7}],
    //Sangão
    [{ destino: 49, distance: 5.3},{ destino: 72, distance: 6.1},{ destino: 22, distance: 5.1},{ destino: 74, distance: 8.3},{ destino: 45, distance: 3.9},{ destino: 41, distance: 4.2}],
    //Santa Augusta
    [{ destino: 66, distance: 1.3},{ destino: 39, distance: 1.1},{ destino: 81, distance: 1.9},{ destino: 22, distance: 2.4},{ destino: 44, distance: 1.5},{ destino: 46, distance: 1.7},{ destino: 72, distance: 1.0}],
    //Santa Bárbara
    [{ destino: 62, distance: 2.0},{ destino: 46, distance: 3.2},{ destino: 76, distance: 3.1},{ destino: 44, distance: 2.9},{ destino: 8, distance: 2.8},{ destino: 33, distance: 1.3},{ destino: 43, distance: 1.3},{ destino: 60, distance: 2.5},{ destino: 64, distance: 1.8}],
    //Santa Catarina
    [{ destino: 43, distance: 1.7},{ destino: 31, distance: 1.3},{ destino: 59, distance: 2.5},{ destino: 8, distance: 3.6},{ destino: 31, distance: 1.3},{ destino: 73, distance: 2.8}],
    //Santa Luzia
    [{ destino: 25, distance: 0.74},{ destino: 51, distance: 0.95},{ destino: 81, distance: 1.3},{ destino: 72, distance: 2.5},{ destino: 50, distance: 0.65},{ destino: 84, distance: 1.3}],
    //Santo Antônio
    [{ destino: 77, distance: 2.9},{ destino: 76, distance: 3.3},{ destino: 44, distance: 4.2},{ destino: 31, distance: 2.4},{ destino: 43, distance: 1.8},{ destino: 46, distance: 2.4},{ destino: 59, distance: 2.0}],
    //Santos Dumont
    [{ destino: 59, distance: 1.8},{ destino: 46, distance: 2.6},{ destino: 34, distance: 0.28},{ destino: 68, distance: 1.8},{ destino: 54, distance: 2.1},{ destino: 33, distance: 2.1},{ destino: 19, distance: 1.7}],
    //São Cristóvão
    [{ destino: 12, distance: 1.1},{ destino: 47, distance: 1.4},{ destino: 8, distance: 1.3},{ destino: 52, distance: 2.1},{ destino: 8, distance: 1.3},{ destino: 7, distance: 1.4}],
    //São Defende
    [{ destino: 9, distance:5 },{ destino: 70, distance:4.2 },{ destino: 38, distance:5.6 },{ destino: 13, distance:4.6 }],
    //São Francisco
    [{ destino: 4, distance: 949},{ destino: 27, distance: 1},{ destino: 21, distance: 0.7},{ destino: 39, distance: 1.3},{ destino: 44, distance: 1.2},{ destino: 58, distance: 1.3}],
    //São João
    [{ destino: 55, distance: 5.2},{ destino: 24, distance: 2},{ destino: 14, distance: 5.3},{ destino: 1, distance: 4.0}],
    //São Luiz
    [{ destino: 33, distance: 1},{ destino: 63, distance: 1.8},{ destino: 34, distance: 1.4},{ destino: 55, distance: 3.9},{ destino: 54, distance: 2.1},{ destino: 19, distance: 0.75},{ destino: 7, distance: 4.1},],
    //São Marcos
    [{ destino: 83, distance: 0.9},{ destino: 32, distance: 1.1}],
    //São Sebastião
    [{ destino: 38, distance: 1.6},{ destino: 75, distance: 1.6},{ destino: 25, distance: 1.1},{ destino: 50, distance: 1.1},{ destino: 65, distance: 4.2}],
    //São Simão
    [{ destino: 2, distance: 6.2},{ destino: 35, distance: 6.6},{ destino: 29, distance: 3.4}],
    //Universitário
    [{ destino: 58, distance: 1.0},{ destino: 39, distance: 2.3},{ destino: 81, distance: 1.8},{ destino: 61, distance: 2.5},{ destino: 83, distance: 3.3},{ destino: 57, distance: 6.1},{ destino: 49, distance: 6.8},{ destino: 22, distance: 2.8}],
    //Vera Cruz
    [{ destino: 31, distance: 2.5},{ destino: 60, distance: 2.8},{ destino: 30, distance: 1.7},{ destino: 15, distance: 2.4},{ destino: 8, distance: 1.8},{ destino: 3, distance: 2.6}],
    //Verdinho
    [{ destino: 57, distance: 8.3},{ destino: 53, distance: 9.7},{ destino: 16, distance: 9.4}],
    //Vila Belmiro
    [{ destino: 38, distance: 0.9},{ destino: 38, distance: 0.9},{ destino: 21, distance: 1.3},{ destino: 70, distance: 1.6},{ destino: 51, distance: 0.6},{ destino: 50, distance: 1.3},{ destino: 39, distance: 1.6},{ destino: 25, distance: 1.1}],
    //Vila Floresta
    [{ destino: 77, distance: 1.1},{ destino: 44, distance: 1.6},{ destino: 4, distance: 1},{ destino: 46, distance: 3.1},{ destino: 49, distance: 3.1},{ destino: 62, distance: 3.3}],
    //Vila Floresta II
    [{ destino: 4, distance:1.1 },{ destino: 40, distance:1.6 },{ destino: 87, distance:1.3 },{ destino: 78, distance:1.4 },{ destino: 27, distance:1.6 },{ destino: 31, distance: 2.9},{ destino: 62, distance: 2.9},{ destino: 76, distance: 1.1}],
    //Vila Francesa
    [{ destino: 79, distance: 1.6},{ destino: 56, distance: 1.3},{ destino: 85, distance: 3.2},{ destino: 88, distance: 2.1},{ destino: 6, distance: 2.8},{ destino: 17, distance: 2.1{ destino: 27, distance: 1.9},{ destino: 40, distance: 1.6},{ destino: 77, distance: 1.4},{ destino: 87, distance: 0.55}],
    //Vila Isabel
    [{ destino: 88, distance: 1.2},{ destino: 56, distance: 0.7},{ destino: 80, distance: 1.5},{ destino: 86, distance: 2.5},{ destino: 78, distance: 1.6},{ destino: 38, distance: 2.9},{ destino: 27, distance: 2.3},{ destino: 17, distance: 1.9},{ destino: 9, distance: 2.3}],
    //Vila Macarini
    [{ destino: 6, distance: 1.2},{ destino: 86, distance: 1.3},{ destino: 85, distance: 2.3},{ destino: 88, distance: 0.45},{ destino: 79, distance: 1.5},{ destino: 9, distance: 2.4}],
    //Vila Manaus
    [{ destino: 51, distance: 0.74},{ destino: 39, distance: 0.8},{ destino: 72, distance: 1.8},{ destino: 61, distance: 1.3},{ destino: 58, distance: 1.9},{ destino: 26, distance: 1.6}],
    //Vila Miguel
    [{ destino: 32, distance: 0.74},{ destino: 70, distance: 0.9},{ destino: 18, distance: 1.0}],
    //Vila Nova Esperança
    [{ destino: 13, distance:0.34 },{ destino: 50, distance:2.2 },{ destino: 61, distance:1.3 },{ destino: 73, distance: 3.3}],
    //Vila Rica
    [{ destino: 52, distance: 3.1},{ destino: 42, distance: 3.2},{ destino: 29, distance: 4.3},{ destino: 5, distance: 1.9},{ destino: 2, distance: 2.2}],
    //Vila São José
    [{ destino: 18, distance: 0.6},{ destino: 32, distance: 1.3},{ destino: 88, distance: 2.0},{ destino: 86, distance: 2.1},{ destino: 80, distance: 2.3},{ destino: 6, distance: 1.2}],
    //Vila Visconde
    [{ destino:6 , distance:1.7 },{ destino:10 , distance:1.2 },{ destino:85 , distance:2.1 },{ destino:32 , distance:2.3 },{ destino: 80, distance: 1.3},{ destino: 79, distance: 2.5},{ destino: 9, distance: 3.5}],
    //Vila Zuleima
    [{ destino: 78, distance:0.54 }{ destino: 77, distance: 1.3}],
    //Wosocris
    [{ destino: 80, distance: 0.44},{ destino: 6, distance: 1.1},{ destino: 85, distance: 2},{ destino: 79, distance: 1.2},{ destino: 78, distance: 2.1},{ destino: 56, distance: 1.5},{ destino: 9, distance: 2.2}]
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
