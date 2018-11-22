import { Injectable } from '@angular/core';

@Injectable()
export class DistancesModuleService {

  protected name = "distances";

  /* exemplo de variável a ser adicionada */
  private distances = [ /* objeto */
    //Ana Maria
    {inicio: 1, destino: 14, distance: 3.7},
    {inicio: 1, destino: 68, distance: 4.0},
    {inicio: 1, destino: 56, distance: 2.8},
    //Argentina
    {inicio: 2, destino: 85, distance: 2.2},
    {inicio: 2, destino: 5, distance: 1.6},
    {inicio: 2, destino: 53, distance: 2.9},
    //Arquimedes Naspolini
    {inicio: 3, destino: 37, distance: 1.6},
    {inicio: 3, destino: 74, distance: 2.6},
    //Boa Vista
    {inicio: 4, destino: 28, distance: 0.85},
    //Brasília
    {inicio: 5, destino: 53, distance: 1.6},
    {inicio: 5, destino: 85, distance: 1.9},
    //Catarinense
    {inicio: 6, destino: 86, distance: 1.2},
    {inicio: 6, destino: 33, distance: 2.3},
    //Ceará
    {inicio: 7, destino: 65, distance: 1.4},
    {inicio: 7, destino: 69, distance: 4.1},
    {inicio: 7, destino: 34, distance: 3.7},
    //Centro
    {inicio: 8, destino: 31, distance: 1.6},
    {inicio: 8, destino: 74, distance: 1.8},
    {inicio: 8, destino: 44, distance: 3.0},
    {inicio: 8, destino: 61, distance: 3.6},
    {inicio: 8, destino: 60, distance: 2.8},
    //Cidade Mineira
    {inicio: 9, destino: 80, distance: 2.3},
    {inicio: 9, destino: 57, distance: 2.6},
    {inicio: 9, destino: 89, distance: 2.2},
    {inicio: 9, destino: 81, distance: 2.4},
    {inicio: 9, destino: 87, distance: 3.5},
    //Colonial
    {inicio: 10, destino: 49, distance: 1.2},
    //Coloninha Zilli
    {inicio: 11, destino: 27, distance: 3.2},
    {inicio: 11, destino: 41, distance: 2.1},
    {inicio: 11, destino: 32, distance: 2.1},
    //Comerciário
    {inicio: 12, destino: 34, distance: 1.2},
    {inicio: 12, destino: 8, distance: 1.6},
    {inicio: 12, destino: 48, distance: 1.9},
    //Conjunto Habitacional Nova Esperança
    {inicio: 13, destino: 51, distance: 1.9},
    //Cristo Redentor
    {inicio: 14, destino: 68, distance: 5.3},
    //Cruzeiro do Sul
    {inicio: 15, destino: 36, distance:1.8 },
    {inicio: 15, destino: 31, distance: 2.2},
    {inicio: 15, destino: 74, distance: 2.4},
    {inicio: 15, destino: 8, distance: 1.7},
    //Dagostin
    {inicio: 16, destino: 54, distance: 3.1},
    {inicio: 16, destino: 75, distance: 9.4},
    //Distrito Industrial
    {inicio: 17, destino: 80, distance: 1.9},
    {inicio: 17, destino: 9, distance: 2.2},
    {inicio: 17, destino: 78, distance: 2.1},
    //Estaçãozinha
    {inicio: 18, destino: 83, distance: 1.0},
    {inicio: 18, destino: 33, distance: 1.6},
    //Fábio Silva
    {inicio: 19, destino: 69, distance: 0.75},
    {inicio: 19, destino: 64, distance: 1.7},
    {inicio: 19, destino: 35, distance: 1.5},
    //Imigrantes
    {inicio: 20, destino: 30, distance: 2.3},
    //Imperatriz
    {inicio: 21, destino: 39, distance: 0.7},
    {inicio: 21, destino: 67, distance: 0.7},
    {inicio: 21, destino: 28, distance: 1.4},
    {inicio: 21, destino: 4, distance: 1.5},
    //Jardim Angélica
    {inicio: 22, destino: 73, distance: 2.8},
    {inicio: 22, destino: 59, distance: 2.4},
    //Jardim Maristela
    {inicio: 23, destino: 29, distance: 1.0},
    {inicio: 23, destino: 7, distance: 1.6},
    {inicio: 23, destino: 1, distance: 1.1},
    //Jardim Paineiras
    {inicio: 24, destino: 56, distance: 3.1},
    {inicio: 24, destino: 50, distance: 1.6},
    {inicio: 24, destino: 55, distance: 2.7},
    {inicio: 24, destino: 19, distance: 3.5},
    {inicio: 24, destino: 46, distance: 2.6},
    {inicio: 24, destino: 42, distance: 3.2},
    //Jardim União
    {inicio: 25, destino: 52, distance: 1.0},
    {inicio: 25, destino: 76, distance: 1.1},
    {inicio: 25, destino: 82, distance: 1.6},
    //Laranjinha
    {inicio: 27, destino: 18, distance: 1.2},
    //Liberdade
    {inicio: 28, destino: 78, distance: 1.9},
    {inicio: 28, destino: 17, distance: 1.9},
    {inicio: 28, destino: 80, distance: 2.3},
    {inicio: 28, destino: 57, distance: 1.9},
    //Linha Anta
    {inicio: 29, destino: 7, distance: 1.8},
    {inicio: 29, destino: 1, distance: 1.3},
    {inicio: 29, destino: 23, distance: 4.2},
    //Linha Batista
    {inicio: 30, destino: 85, distance: 4.3},
    {inicio: 30, destino: 72, distance: 3.4},
    {inicio: 30, destino: 2, distance: 2.0},
   //Lote Seis 
    {inicio: 31, destino: 3, distance: 2.4},
    {inicio: 31, destino: 74, distance: 1.7},
    //Maria Ceu
    {inicio: 32, destino: 41, distance: 3.1},
    {inicio: 32, destino: 78, distance: 2.9},
    {inicio: 32, destino: 63, distance: 2.4},
    //Metropol
    {inicio: 33, destino: 70, distance: 1.1},
    //Michel
    {inicio: 34, destino: 64, distance: 2.1},
    {inicio: 34, destino: 60, distance: 1.3},
    {inicio: 34, destino: 44, distance: 2.4},
    {inicio: 34, destino: 8, distance: 2.3},
    {inicio: 34, destino: 48, distance: 2.7},
    //Milanese
    {inicio: 35, destino: 47, distance: 2.8},
    {inicio: 35, destino: 22, distance: 4.0},
    //Mina do Brasil
    {inicio: 36, destino: 47, distance: 3.7},
    {inicio: 36, destino: 31, distance: 2.1},
    //Mina do Mato
    {inicio: 37, destino: 11, distance: 1.9},
    {inicio: 37, destino: 27, distance: 5.3},
    {inicio: 37, destino: 32, distance: 2.8},
    {inicio: 37, destino: 70, distance: 5.9},
    //Mina União
    {inicio: 39, destino: 28, distance: 1.3},
    {inicio: 39, destino: 38, distance: 1.3},
    {inicio: 39, destino: 17, distance: 1.3},
    {inicio: 39, destino: 80, distance: 1.6},
    //Mineira Velha 
    {inicio: 40, destino: 52, distance: 1.3},
    {inicio: 40, destino: 76, distance: 1.6},
    {inicio: 40, destino: 39, distance: 1.2},
    {inicio: 40, destino: 21, distance: 0.8},
    {inicio: 40, destino: 67, distance: 1.3},
    //Monte Castelo
    {inicio: 41, destino: 88, distance: 0.75},
    {inicio: 41, destino: 78, distance: 1.6},
    {inicio: 41, destino: 86, distance: 2.9},
    //Morro Estevão
    {inicio: 42, destino: 16, distance: 2.4},
    {inicio: 42, destino: 58, distance: 4.2},
    //Nossa Senhora da Salete
    {inicio: 43, destino: 7, distance: 3.1},
    {inicio: 43, destino: 23, distance: 2.9},
    {inicio: 43, destino: 29, distance: 3.7},
    {inicio: 43, destino: 1, distance: 3.2},
    {inicio: 43, destino: 14, distance: 3.6},
    //Operária Nova
    {inicio: 44, destino: 60, distance: 1.3},
    {inicio: 44, destino: 32, distance: 1.2},
    {inicio: 44, destino: 63, distance: 1.8},
    //Paraíso
    {inicio: 45, destino: 4, distance: 1},
    {inicio: 45, destino: 22, distance: 3.6},
    {inicio: 45, destino: 59, distance: 1.5},
    {inicio: 45, destino: 67, distance: 1.2},
    //Pedro Zanivan
    {inicio: 46, destino: 42, distance: 1.9},
    {inicio: 46, destino: 58, distance: 3.9},
    //Pinheirinho
    {inicio: 47, destino: 63, distance: 2.4},
    {inicio: 47, destino: 77, distance: 3.1},
    {inicio: 47, destino: 45, distance: 2.0},
    {inicio: 47, destino: 22, distance: 2.6},
    {inicio: 47, destino: 59, distance: 1.7},
    //Pio Corrêa
    {inicio: 48, destino: 8, distance: 1.1},
    {inicio: 48, destino: 15, distance: 1.6},
    //Poço Um
    {inicio: 49, destino: 33, distance: 1.3},
    //Primeira Linha
    {inicio: 50, destino: 55, distance: 3.6},
    {inicio: 50, destino: 22, distance: 5.8},
    {inicio: 50, destino: 73, distance: 6.8},
    //Progresso
    {inicio: 51, destino: 25, distance: 0.17},
    {inicio: 51, destino: 62, distance: 0.65},
    {inicio: 51, destino: 52, distance: 1.1},
    {inicio: 51, destino: 76, distance: 1.3},
    //Promorar Vila Vitória
    {inicio: 52, destino: 76, distance: 0.6},
    {inicio: 52, destino: 39, distance: 1.2},
    {inicio: 52, destino: 21, distance: 1.7},
    //Próspera
    {inicio: 53, destino: 65, distance: 2.1},
    {inicio: 53, destino: 48, distance: 1.8},
    {inicio: 53, destino: 15, distance: 3.0},
    {inicio: 53, destino: 36, distance: 4.2},
    {inicio: 53, destino: 7, distance: 2.4},
    {inicio: 53, destino: 43, distance: 2.6},
    //Quarta Linha
    {inicio: 54, destino: 75, distance: 9.7},
    //Recanto Verde
    {inicio: 55, destino: 19, distance: 1.8},
    {inicio: 55, destino: 35, distance: 1.9},
    {inicio: 55, destino: 64, distance: 2.1},
    {inicio: 55, destino: 69, distance: 2.1},
    //Renascer
    {inicio: 56, destino: 50, distance: 4.0},
    {inicio: 56, destino: 55, distance: 1.9},
    {inicio: 56, destino: 19, distance: 2.1},
    {inicio: 56, destino: 69, distance: 2.1},
    //Rio Maina
    {inicio: 57, destino: 89, distance: 1.5},
    {inicio: 57, destino: 6, distance: 2.1},
    //Sangão
    {inicio: 58, destino: 50, distance: 5.3},
    {inicio: 58, destino: 73, distance: 6.1},
    {inicio: 58, destino: 22, distance: 5.1},
    //Santa Augusta
    {inicio: 59, destino: 67, distance: 1.3},
    {inicio: 59, destino: 40, distance: 1.1},
    {inicio: 59, destino: 82, distance: 1.9},
    //Santa Bárbara
    {inicio: 60, destino: 63, distance: 2.0},
    {inicio: 60, destino: 47, distance: 3.2},
    {inicio: 60, destino: 77, distance: 3.1},
    {inicio: 60, destino: 45, distance: 2.9},
    //Santa Catarina
    {inicio: 61, destino: 44, distance: 1.7},
    {inicio: 61, destino: 32, distance: 1.3},
    {inicio: 61, destino: 60, distance: 2.5},
    //Santa Luzia
    {inicio: 62, destino: 25, distance: 0.75},
    {inicio: 62, destino: 52, distance: 0.95},
    {inicio: 62, destino: 82, distance: 1.3},
    //Santo Antônio
    {inicio: 63, destino: 78, distance: 2.9},
    {inicio: 63, destino: 77, distance: 3.3},
    {inicio: 63, destino: 45, distance: 4.2},
    //Santos Dumont
    {inicio: 64, destino: 60, distance: 1.8},
    {inicio: 64, destino: 47, distance: 2.6},
    {inicio: 64, destino: 35, distance: 0.28},
    //São Cristóvão
    {inicio: 65, destino: 12, distance: 1.1},
    {inicio: 65, destino: 48, distance: 1.4},
    {inicio: 65, destino: 8, distance: 1.3},
    //São Defende
    {inicio: 66, destino: 9, distance:5 },
    {inicio: 66, destino: 71, distance:4.2 },
    {inicio: 66, destino: 38, distance:5.6 },
    {inicio: 66, destino: 13, distance:4.6 },
    //São Francisco
    {inicio: 67, destino: 4, distance: 950},
    {inicio: 67, destino: 28, distance: 1},
    //São João
    {inicio: 68, destino: 56, distance: 5.2},
    {inicio: 68, destino: 24, distance: 2},
    //São Luiz
    {inicio: 69, destino: 34, distance: 1},
    {inicio: 69, destino: 64, distance: 1.8},
    {inicio: 69, destino: 35, distance: 1.4},
    //São Marcos
    //São Sebastião
    {inicio: 71, destino: 38, distance: 1.6},
    {inicio: 71, destino: 76, distance: 1.6},
    {inicio: 71, destino: 25, distance: 1.1},
    {inicio: 71, destino: 51, distance: 1.1},
    //São Simão
    {inicio: 72, destino: 2, distance: 6.2},
    {inicio: 72, destino: 36, distance: 6.6},
    //Universitário
    {inicio: 73, destino: 59, distance: 1.0},
    {inicio: 73, destino: 40, distance: 2.3},
    {inicio: 73, destino: 82, distance: 1.8},
    {inicio: 73, destino: 62, distance: 2.5},
    {inicio: 73, destino: 84, distance: 3.3},
    //Vera Cruz
    {inicio: 74, destino: 32, distance: 2.5},
    {inicio: 74, destino: 61, distance: 2.8},
    //Verdinho
    {inicio: 75, destino: 58, distance: 8.3},
    //Vila Belmiro
    {inicio: 76, destino: 39, distance: 0.9},
    {inicio: 76, destino: 38, distance: 0.9},
    {inicio: 76, destino: 21, distance: 1.3},
    //Vila Floresta
    {inicio: 77, destino: 78, distance: 1.1},
    {inicio: 77, destino: 45, distance: 1.6},
    {inicio: 77, destino: 4, distance: 1},
    //Vila Floresta II
    {inicio: 78, destino: 4, distance:1.1 },
    {inicio: 78, destino: 41, distance:1.6 },
    {inicio: 78, destino: 88, distance:1.3 },
    {inicio: 78, destino: 79, distance:1.4 },
    {inicio: 78, destino: 28, distance:1.6 },
    //Vila Francesa
    {inicio: 79, destino: 80, distance: 1.6},
    {inicio: 79, destino: 57, distance: 1.3},
    {inicio: 79, destino: 86, distance: 3.2},
    {inicio: 79, destino: 89, distance: 2.1},
    {inicio: 79, destino: 6, distance: 2.8},
    //Vila Isabel
    {inicio: 80, destino: 89, distance: 1.2},
    {inicio: 80, destino: 57, distance: 0.7},
    {inicio: 80, destino: 81, distance: 1.5},
    {inicio: 80, destino: 87, distance: 2.5},
    //Vila Macarini
    {inicio: 81, destino: 6, distance: 1.2},
    {inicio: 81, destino: 87, distance: 1.3},
    {inicio: 81, destino: 86, distance: 2.3},
    //Vila Manaus
    {inicio: 82, destino: 52, distance: 0.75},
    {inicio: 82, destino: 40, distance: 0.8},
    //Vila Miguel
    {inicio: 83, destino: 33, distance: 0.75},
    {inicio: 83, destino: 70, distance: 0.9},
    //Vila Nova Esperança
    {inicio: 84, destino: 13, distance:0.35 },
    {inicio: 84, destino: 51, distance:2.2 },
    {inicio: 84, destino: 62, distance:1.3 },
    //Vila Rica
    {inicio: 85, destino: 53, distance: 3.1},
    {inicio: 85, destino: 43, distance: 3.2},
    //Vila São José
    {inicio: 86, destino: 18, distance: 0.6},
    {inicio: 86, destino: 33, distance: 1.3},
    //Vila Visconde
    {inicio: 87, destino:6 , distance:1.7 },
    {inicio: 87, destino:10 , distance:1.2 },
    {inicio: 87, destino:86 , distance:2.1 },
    {inicio: 87, destino:33 , distance:2.3 },
    //Vila Zuleima
    {inicio: 88, destino: 79, distance:0.55 },
    //Wosocris
    {inicio: 89, destino: 81, distance: 0.45},
    {inicio: 89, destino: 6, distance: 1.1},
    {inicio: 89, destino: 86, distance: 2}  


  ]

  constructor() { }

}
