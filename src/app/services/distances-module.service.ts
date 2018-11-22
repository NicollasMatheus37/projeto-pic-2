import { Injectable } from '@angular/core';

@Injectable()
export class DistancesModuleService {

  protected name = "distances";

  /* exemplo de variável a ser adicionada */
  private distances = [ /* objeto */
    //Ana Maria
    {inicio: 1, destino: 14, distance: 3.7},
    {inicio: 1, destino: 67, distance: 4.0},
    {inicio: 1, destino: 55, distance: 2.8},
    //Argentina
    {inicio: 2, destino: 84, distance: 2.2},
    {inicio: 2, destino: 5, distance: 1.6},
    {inicio: 2, destino: 52, distance: 2.9},
    //Arquimedes Naspolini
    {inicio: 3, destino: 36, distance: 1.6},
    {inicio: 3, destino: 73, distance: 2.6},
    //Boa Vista
    {inicio: 4, destino: 27, distance: 0.84},
    //Brasília
    {inicio: 5, destino: 52, distance: 1.6},
    {inicio: 5, destino: 84, distance: 1.9},
    //Catarinense
    {inicio: 6, destino: 85, distance: 1.2},
    {inicio: 6, destino: 32, distance: 2.3},
    //Ceará
    {inicio: 7, destino: 64, distance: 1.4},
    {inicio: 7, destino: 69, distance: 4.1},
    {inicio: 7, destino: 33, distance: 3.7},
    //Centro
    {inicio: 8, destino: 30, distance: 1.6},
    {inicio: 8, destino: 73, distance: 1.8},
    {inicio: 8, destino: 43, distance: 3.0},
    {inicio: 8, destino: 60, distance: 3.6},
    {inicio: 8, destino: 59, distance: 2.8},
    //Cidade Mineira
    {inicio: 9, destino: 79, distance: 2.3},
    {inicio: 9, destino: 56, distance: 2.6},
    {inicio: 9, destino: 88, distance: 2.2},
    {inicio: 9, destino: 80, distance: 2.4},
    {inicio: 9, destino: 86, distance: 3.5},
    //Colonial
    {inicio: 10, destino: 48, distance: 1.2},
    //Coloninha Zilli
    {inicio: 11, destino: 26, distance: 3.2},
    {inicio: 11, destino: 40, distance: 2.1},
    {inicio: 11, destino: 31, distance: 2.1},
    //Comerciário
    {inicio: 12, destino: 33, distance: 1.2},
    {inicio: 12, destino: 8, distance: 1.6},
    {inicio: 12, destino: 47, distance: 1.9},
    //Conjunto Habitacional Nova Esperança
    {inicio: 13, destino: 50, distance: 1.9},
    //Cristo Redentor
    {inicio: 14, destino: 67, distance: 5.3},
    //Cruzeiro do Sul
    {inicio: 15, destino: 35, distance:1.8 },
    {inicio: 15, destino: 30, distance: 2.2},
    {inicio: 15, destino: 73, distance: 2.4},
    {inicio: 15, destino: 8, distance: 1.7},
    //Dagostin
    {inicio: 16, destino: 53, distance: 3.1},
    {inicio: 16, destino: 74, distance: 9.4},
    //Distrito Industrial
    {inicio: 17, destino: 79, distance: 1.9},
    {inicio: 17, destino: 9, distance: 2.2},
    {inicio: 17, destino: 77, distance: 2.1},
    //Estaçãozinha
    {inicio: 18, destino: 82, distance: 1.0},
    {inicio: 18, destino: 32, distance: 1.6},
    //Fábio Silva
    {inicio: 19, destino: 69, distance: 0.74},
    {inicio: 19, destino: 63, distance: 1.7},
    {inicio: 19, destino: 34, distance: 1.5},
    //Imigrantes
    {inicio: 20, destino: 29, distance: 2.3},
    //Imperatriz
    {inicio: 21, destino: 38, distance: 0.7},
    {inicio: 21, destino: 66, distance: 0.7},
    {inicio: 21, destino: 27, distance: 1.4},
    {inicio: 21, destino: 4, distance: 1.5},
    //Jardim Angélica
    {inicio: 22, destino: 72, distance: 2.8},
    {inicio: 22, destino: 58, distance: 2.4},
    //Jardim Maristela
    {inicio: 23, destino: 28, distance: 1.0},
    {inicio: 23, destino: 7, distance: 1.6},
    {inicio: 23, destino: 1, distance: 1.1},
    //Jardim Paineiras
    {inicio: 24, destino: 55, distance: 3.1},
    {inicio: 24, destino: 49, distance: 1.6},
    {inicio: 24, destino: 54, distance: 2.7},
    {inicio: 24, destino: 19, distance: 3.5},
    {inicio: 24, destino: 45, distance: 2.6},
    {inicio: 24, destino: 41, distance: 3.2},
    //Jardim União
    {inicio: 25, destino: 51, distance: 1.0},
    {inicio: 25, destino: 75, distance: 1.1},
    {inicio: 25, destino: 81, distance: 1.6},
    //Laranjinha
    {inicio: 26, destino: 18, distance: 1.2},
    //Liberdade
    {inicio: 27, destino: 77, distance: 1.9},
    {inicio: 27, destino: 17, distance: 1.9},
    {inicio: 27, destino: 79, distance: 2.3},
    {inicio: 27, destino: 56, distance: 1.9},
    //Linha Anta
    {inicio: 28, destino: 7, distance: 1.8},
    {inicio: 28, destino: 1, distance: 1.3},
    {inicio: 28, destino: 23, distance: 4.2},
    //Linha Batista
    {inicio: 29, destino: 84, distance: 4.3},
    {inicio: 29, destino: 71, distance: 3.4},
    {inicio: 29, destino: 2, distance: 2.0},
   //Lote Seis 
    {inicio: 30, destino: 3, distance: 2.4},
    {inicio: 30, destino: 73, distance: 1.7},
    //Maria Ceu
    {inicio: 31, destino: 40, distance: 3.1},
    {inicio: 31, destino: 77, distance: 2.9},
    {inicio: 31, destino: 62, distance: 2.4},
    //Metropol
    {inicio: 32, destino: 70, distance: 1.1},
    //Michel
    {inicio: 33, destino: 63, distance: 2.1},
    {inicio: 33, destino: 59, distance: 1.3},
    {inicio: 33, destino: 43, distance: 2.4},
    {inicio: 33, destino: 8, distance: 2.3},
    {inicio: 33, destino: 47, distance: 2.7},
    //Milanese
    {inicio: 34, destino: 46, distance: 2.8},
    {inicio: 34, destino: 22, distance: 4.0},
    //Mina do Brasil
    {inicio: 35, destino: 46, distance: 3.7},
    {inicio: 35, destino: 30, distance: 2.1},
    //Mina do Mato
    {inicio: 36, destino: 11, distance: 1.9},
    {inicio: 36, destino: 26, distance: 5.3},
    {inicio: 36, destino: 31, distance: 2.8},
    {inicio: 36, destino: 70, distance: 5.9},
    //Mina União
    {inicio: 38, destino: 27, distance: 1.3},
    {inicio: 38, destino: 38, distance: 1.3},
    {inicio: 38, destino: 17, distance: 1.3},
    {inicio: 38, destino: 79, distance: 1.6},
    //Mineira Velha 
    {inicio: 39, destino: 51, distance: 1.3},
    {inicio: 39, destino: 75, distance: 1.6},
    {inicio: 39, destino: 38, distance: 1.2},
    {inicio: 39, destino: 21, distance: 0.8},
    {inicio: 39, destino: 66, distance: 1.3},
    //Monte Castelo
    {inicio: 40, destino: 87, distance: 0.74},
    {inicio: 40, destino: 77, distance: 1.6},
    {inicio: 40, destino: 85, distance: 2.9},
    //Morro Estevão
    {inicio: 41, destino: 16, distance: 2.4},
    {inicio: 41, destino: 57, distance: 4.2},
    //Nossa Senhora da Salete
    {inicio: 42, destino: 7, distance: 3.1},
    {inicio: 42, destino: 23, distance: 2.9},
    {inicio: 42, destino: 28, distance: 3.7},
    {inicio: 42, destino: 1, distance: 3.2},
    {inicio: 42, destino: 14, distance: 3.6},
    //Operária Nova
    {inicio: 43, destino: 59, distance: 1.3},
    {inicio: 43, destino: 31, distance: 1.2},
    {inicio: 43, destino: 62, distance: 1.8},
    //Paraíso
    {inicio: 44, destino: 4, distance: 1},
    {inicio: 44, destino: 22, distance: 3.6},
    {inicio: 44, destino: 58, distance: 1.5},
    {inicio: 44, destino: 66, distance: 1.2},
    //Pedro Zanivan
    {inicio: 45, destino: 41, distance: 1.9},
    {inicio: 45, destino: 57, distance: 3.9},
    //Pinheirinho
    {inicio: 46, destino: 62, distance: 2.4},
    {inicio: 46, destino: 76, distance: 3.1},
    {inicio: 46, destino: 44, distance: 2.0},
    {inicio: 46, destino: 22, distance: 2.6},
    {inicio: 46, destino: 58, distance: 1.7},
    //Pio Corrêa
    {inicio: 47, destino: 8, distance: 1.1},
    {inicio: 47, destino: 15, distance: 1.6},
    //Poço Um
    {inicio: 48, destino: 32, distance: 1.3},
    //Primeira Linha
    {inicio: 49, destino: 54, distance: 3.6},
    {inicio: 49, destino: 22, distance: 5.8},
    {inicio: 49, destino: 72, distance: 6.8},
    //Progresso
    {inicio: 50, destino: 25, distance: 0.17},
    {inicio: 50, destino: 61, distance: 0.64},
    {inicio: 50, destino: 51, distance: 1.1},
    {inicio: 50, destino: 75, distance: 1.3},
    //Promorar Vila Vitória
    {inicio: 51, destino: 75, distance: 0.6},
    {inicio: 51, destino: 38, distance: 1.2},
    {inicio: 51, destino: 21, distance: 1.7},
    //Próspera
    {inicio: 52, destino: 64, distance: 2.1},
    {inicio: 52, destino: 47, distance: 1.8},
    {inicio: 52, destino: 15, distance: 3.0},
    {inicio: 52, destino: 35, distance: 4.2},
    {inicio: 52, destino: 7, distance: 2.4},
    {inicio: 52, destino: 42, distance: 2.6},
    //Quarta Linha
    {inicio: 53, destino: 74, distance: 9.7},
    //Recanto Verde
    {inicio: 54, destino: 19, distance: 1.8},
    {inicio: 54, destino: 34, distance: 1.9},
    {inicio: 54, destino: 63, distance: 2.1},
    {inicio: 54, destino: 69, distance: 2.1},
    //Renascer
    {inicio: 55, destino: 49, distance: 4.0},
    {inicio: 55, destino: 54, distance: 1.9},
    {inicio: 55, destino: 19, distance: 2.1},
    {inicio: 55, destino: 69, distance: 2.1},
    //Rio Maina
    {inicio: 56, destino: 88, distance: 1.5},
    {inicio: 56, destino: 6, distance: 2.1},
    //Sangão
    {inicio: 57, destino: 49, distance: 5.3},
    {inicio: 57, destino: 72, distance: 6.1},
    {inicio: 57, destino: 22, distance: 5.1},
    //Santa Augusta
    {inicio: 58, destino: 66, distance: 1.3},
    {inicio: 58, destino: 39, distance: 1.1},
    {inicio: 58, destino: 81, distance: 1.9},
    //Santa Bárbara
    {inicio: 59, destino: 62, distance: 2.0},
    {inicio: 59, destino: 46, distance: 3.2},
    {inicio: 59, destino: 76, distance: 3.1},
    {inicio: 59, destino: 44, distance: 2.9},
    //Santa Catarina
    {inicio: 60, destino: 43, distance: 1.7},
    {inicio: 60, destino: 31, distance: 1.3},
    {inicio: 60, destino: 59, distance: 2.5},
    //Santa Luzia
    {inicio: 61, destino: 25, distance: 0.74},
    {inicio: 61, destino: 51, distance: 0.95},
    {inicio: 61, destino: 81, distance: 1.3},
    //Santo Antônio
    {inicio: 62, destino: 77, distance: 2.9},
    {inicio: 62, destino: 76, distance: 3.3},
    {inicio: 62, destino: 44, distance: 4.2},
    //Santos Dumont
    {inicio: 63, destino: 59, distance: 1.8},
    {inicio: 63, destino: 46, distance: 2.6},
    {inicio: 63, destino: 34, distance: 0.27},
    //São Cristóvão
    {inicio: 64, destino: 12, distance: 1.1},
    {inicio: 64, destino: 47, distance: 1.4},
    {inicio: 64, destino: 8, distance: 1.3},
    //São Defende
    {inicio: 65, destino: 9, distance:5 },
    {inicio: 65, destino: 70, distance:4.2 },
    {inicio: 65, destino: 38, distance:5.6 },
    {inicio: 65, destino: 13, distance:4.6 },
    //São Francisco
    {inicio: 66, destino: 4, distance: 949},
    {inicio: 66, destino: 27, distance: 1},
    //São João
    {inicio: 67, destino: 55, distance: 5.2},
    {inicio: 67, destino: 24, distance: 2},
    //São Luiz
    {inicio: 69, destino: 33, distance: 1},
    {inicio: 69, destino: 63, distance: 1.8},
    {inicio: 69, destino: 34, distance: 1.4},
    //São Marcos
    //São Sebastião
    {inicio: 70, destino: 38, distance: 1.6},
    {inicio: 70, destino: 75, distance: 1.6},
    {inicio: 70, destino: 25, distance: 1.1},
    {inicio: 70, destino: 50, distance: 1.1},
    //São Simão
    {inicio: 71, destino: 2, distance: 6.2},
    {inicio: 71, destino: 35, distance: 6.6},
    //Universitário
    {inicio: 72, destino: 58, distance: 1.0},
    {inicio: 72, destino: 39, distance: 2.3},
    {inicio: 72, destino: 81, distance: 1.8},
    {inicio: 72, destino: 61, distance: 2.5},
    {inicio: 72, destino: 83, distance: 3.3},
    //Vera Cruz
    {inicio: 73, destino: 31, distance: 2.5},
    {inicio: 73, destino: 60, distance: 2.8},
    //Verdinho
    {inicio: 74, destino: 57, distance: 8.3},
    //Vila Belmiro
    {inicio: 75, destino: 38, distance: 0.9},
    {inicio: 75, destino: 38, distance: 0.9},
    {inicio: 75, destino: 21, distance: 1.3},
    //Vila Floresta
    {inicio: 76, destino: 77, distance: 1.1},
    {inicio: 76, destino: 44, distance: 1.6},
    {inicio: 76, destino: 4, distance: 1},
    //Vila Floresta II
    {inicio: 77, destino: 4, distance:1.1 },
    {inicio: 77, destino: 40, distance:1.6 },
    {inicio: 77, destino: 87, distance:1.3 },
    {inicio: 77, destino: 78, distance:1.4 },
    {inicio: 77, destino: 27, distance:1.6 },
    //Vila Francesa
    {inicio: 78, destino: 79, distance: 1.6},
    {inicio: 78, destino: 56, distance: 1.3},
    {inicio: 78, destino: 85, distance: 3.2},
    {inicio: 78, destino: 88, distance: 2.1},
    {inicio: 78, destino: 6, distance: 2.8},
    //Vila Isabel
    {inicio: 79, destino: 88, distance: 1.2},
    {inicio: 79, destino: 56, distance: 0.7},
    {inicio: 79, destino: 80, distance: 1.5},
    {inicio: 79, destino: 86, distance: 2.5},
    //Vila Macarini
    {inicio: 80, destino: 6, distance: 1.2},
    {inicio: 80, destino: 86, distance: 1.3},
    {inicio: 80, destino: 85, distance: 2.3},
    //Vila Manaus
    {inicio: 81, destino: 51, distance: 0.74},
    {inicio: 81, destino: 39, distance: 0.8},
    //Vila Miguel
    {inicio: 82, destino: 32, distance: 0.74},
    {inicio: 82, destino: 70, distance: 0.9},
    //Vila Nova Esperança
    {inicio: 83, destino: 13, distance:0.34 },
    {inicio: 83, destino: 50, distance:2.2 },
    {inicio: 83, destino: 61, distance:1.3 },
    //Vila Rica
    {inicio: 84, destino: 52, distance: 3.1},
    {inicio: 84, destino: 42, distance: 3.2},
    //Vila São José
    {inicio: 85, destino: 18, distance: 0.6},
    {inicio: 85, destino: 32, distance: 1.3},
    //Vila Visconde
    {inicio: 86, destino:6 , distance:1.7 },
    {inicio: 86, destino:10 , distance:1.2 },
    {inicio: 86, destino:85 , distance:2.1 },
    {inicio: 86, destino:32 , distance:2.3 },
    //Vila Zuleima
    {inicio: 87, destino: 78, distance:0.54 },
    //Wosocris
    {inicio: 88, destino: 80, distance: 0.44},
    {inicio: 88, destino: 6, distance: 1.1},
    {inicio: 88, destino: 85, distance: 2}  


  ]

  constructor() { }

}
