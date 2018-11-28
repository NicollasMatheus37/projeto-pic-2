import { Injectable } from '@angular/core';

@Injectable()
export class DistancesModuleService {

  protected name = "distances";

  /* exemplo de variável a ser adicionada */
  public distances = [ /* objeto */
    //Ana Maria
    [{destino: "Cristo Redentor", distance: 3.7},{destino: "São João", distance: 4.0},{ destino: "Renascer", distance: 2.8},{ destino: "Jardim Maristela", distance: 1.1},{destino: "Linha Anta", distance: 1.3},{ destino: "Operária Nova", distance: 3.2}],
    //Argentina
    [{destino: "Vila Rica", distance: 2.2},{inicio: "Argentina",destino: "Brasília", distance: 1.6},{destino: "Próspera", distance: 2.9},{destino: "Linha Batista", distance: 2.0},{inicio: "Argentina",destino: "São Simão", distance: 6.2}],
    //Arquimedes Naspolini
    [{destino: "Mina Do Mato", distance: 1.6},{destino: "Vera Cruz", distance: 2.6},{destino: "Lote Seis", distance: 2.4},{destino: "Mina Brasil", distance: 3.7}],
    //Boa Vista
    [{destino: "Liberdade", distance: 0.84},{destino: "Imperatriz", distance: 1.5},{destino: "Paraíso", distance: 1.0},{destino: "São Francisco", distance: 0.95},{destino: "Vila Floresta", distance: 1.0},{destino: "Vila Floresta II", distance: 1.1}],
    //Brasília
    [{destino: "Próspera", distance: 1.6},{destino: "Vila Rica", distance: 1.9},{destino: "Argentina", distance: 1.6}],
    //Catarinense
    [{destino: "Vila São José", distance: 1.2},{destino: "Metropol", distance: 2.3},{destino: "Rio Maina", distance: 2.1},{destino: "Vila Francesa", distance: 2.8},{destino: "Vila Macarini", distance: 1.2},{destino: "Vila Visconde", distance: 1.7},{destino: "Wosocris", distance: 1.1},],
    //Ceará
    [{destino: "São Cristóvão", distance: 1.4},{destino: "São Marcos", distance: 4.1},{destino: "Michel", distance: 3.7},{destino: "Jardim Maristela", distance: 1.6},{destino: "Linha Anta", distance: 1.8},{destino: "Nossa Senhora Da Salete", distance: 3.1},{destino: "Próspera", distance: 2.4}],
    //Centro
    [{destino: "Lote Seis", distance: 1.6},{destino: "Vera Cruz", distance: 1.8},{destino: "Operária Nova", distance: 3.0},{destino: "Santa Catarina", distance: 3.6},{destino: "Santa Bárbara", distance: 2.8},{destino: "Comerciário", distance: 1.6},{destino: "Cruzeiro Do Sul", distance: 1.7},{destino: "Michel", distance: 2.3},{destino: "Pio Corrêa", distance: 1.1},{destino: "São Cristóvão", distance: 1.3}],
    //Cidade Mineira
    [{destino: "Vila Isabel", distance: 2.3},{destino: "Rio Maina", distance: 2.6},{destino: "Wosocris", distance: 2.2},{destino: "Vila Macarini", distance: 2.4},{destino: "Vila Visconde", distance: 3.5},{destino: "Distrito Industrial", distance: 2.2},{destino: "Mina União", distance: 1.6},{destino: "São Defende", distance: 5.0}],
    //Colonial
    [{ destino: "Poço Um", distance: 1.2},{destino: "Vila Visconde", distance: 1.2}],
    //Coloninha Zilli
    [{ destino: "Laranjinha", distance: 3.2},{ destino: "Monte Castelo", distance: 2.1},{ destino: "Maria Céu", distance: 2.1},{destino: "Mina Do Mato", distance: 1.9}],
    //Comerciário
    [{ destino: "Michel", distance: 1.2},{ destino: "Centro", distance: 1.6},{ destino: "Pio Corrêa", distance: 1.9},{destino: "Centro", distance: 1.6},{destino: "São Cristóvão", distance: 1.1}],
    //Conjunto Habitacional Nova Esperança
    [{ destino: "Progresso", distance: 1.9},{destino: "São Defende", distance: 4.6},{destino: "Vila Rica", distance: 0.35}],
    //Cristo Redentor
    [{ destino: "São João", distance: 5.3},{destino: "Ana Maria", distance: 3.7},{destino: "Nossa Senhora Da Salete", distance: 3.6}],
    //Cruzeiro do Sul
    [{ destino: "Mina Brasil", distance:1.8 },{ destino: "Lote Seis", distance: 2.2},{ destino: "Vera Cruz", distance: 2.4},{ destino: "Centro", distance: 1.7},{destino: "Pio Corrêa", distance: 1.6},{destino: "Próspera", distance: 3.0}],
    //Dagostin
    [{ destino: "Quarta Linha", distance: 3.1},{ destino: "Verdinho", distance: 9.4},{destino: "Morro Estêvão", distance: 2.4}],
    //Distrito Industrial
    [{ destino: "Vila Isabel", distance: 1.9},{ destino: "Cidade Mineira", distance: 2.2},{ destino: "Vila Floresta II", distance: 2.1},{destino: "Cidade Mineira", distance: 2.2},{destino: "Mina União", distance: 1.6}],
    //Estaçãozinha
    [{ destino: "Vila Miguel", distance: 1.0},{ destino: "Metropol", distance: 1.6},{destino: "Laranjinha", distance: 1.2},{destino: "Vila São José", distance: 0.6}],
    //Fábio Silva
    [{ destino: "São Marcos", distance: 0.75},{ destino: "Santos Dumont", distance: 1.7},{ destino: "Milanese", distance: 1.5},{destino: "Jardim Paineiras", distance: 3.5},{destino: "Recanto Verde", distance: 1.8},{inicio:"" ,destino: "Renascer", distance: 3.7}],
    //Imigrantes
    [{ destino: "Linha Batista", distance: 2.3}],
    //Imperatriz
    [{ destino: "Mineira Nova", distance: 0.7},{ destino: "São Francisco", distance: 0.7},{ destino: "Liberdade", distance: 1.4},{ destino: "Boa Vista", distance: 1.5},{destino: "Mineira Velha", distance: 0.8},{destino: "Promorar Vila Vitoria", distance: 1.7},{destino: "Vila Belmiro", distance: 1.3}],
    //Jardim Angélica
    [{ destino: "Universitário", distance: 2.8},{ destino: "Santa Augusta", distance: 2.4},{destino: "Milanese", distance: 4.0},{destino: "Paraíso", distance: 3.6},{destino: "Pinheirinho", distance: 2.6},{inicio:"" ,destino: "Primeira Linha", distance: 5.8},{destino: "Sangão", distance: 5.1}],
    //Jardim Maristela
    [{ destino: "Linha Anta", distance: 1.0},{ destino: "Ceará", distance: 1.6},{ destino: "Ana Maria", distance: 1.1},{destino: "Nossa Senhora Da Salete", distance: 2.9}],
    //Jardim Paineiras
    [{ destino: "Renascer", distance: 3.1},{ destino: "Primeira Linha", distance: 1.6},{ destino: "Recanto Verde", distance: 2.7},{ destino: "Fábio Silva", distance: 3.5},{ destino: "Pedro Zanivan", distance: 2.6},{ destino: "Morro Estêvão", distance: 3.2},{destino: "São João", distance: 2.0}],
    //Jardim União
    [{ destino: "Promorar Vila Vitoria", distance: 1.0},{ destino: "Vila Belmiro", distance: 1.1},{ destino: "Vila Manaus", distance: 1.6},{destino: "Progresso", distance: 0.17},{destino: "Santa Luzia", distance: 0.75},{destino: "São Sebastião", distance: 1.1}],
    //Laranjinha
    [{ destino: "Estaçãozinha", distance: 1.2},{destino: "Mina Do Mato", distance: 5.3},{destino: "Coloninha Zili", distance: 3.2}],
    //Liberdade
    [{ destino: "Vila Floresta II", distance: 1.9},{ destino: "Distrito Industrial", distance: 1.9},{ destino: "Vila Isabel", distance: 2.3},{ destino: "Rio Maina", distance: 1.9},{destino: "Imperatriz", distance: 1.4},{destino: "Mineira Nova", distance: 1.3},{destino: "São Francisco", distance: 1.0},{destino: "Vila Floresta II", distance: 1.6}],
    //Linha Anta
    [{ destino: "Ceará", distance: 1.8},{ destino: "Ana Maria", distance: 1.3},{ destino: "Jardim Maristela", distance: 4.2},{destino: "Jardim Maristela", distance: 1.0},{destino: "Nossa Senhora Da Salete", distance: 3.7}],
    //Linha Batista
    [{ destino: "Vila Rica", distance: 4.3},{ destino: "São Simão", distance: 3.4},{ destino: "Argentina", distance: 2.0},{destino: "Imigrantes", distance: 2.3}],
    //Lote Seis 
    [{ destino: "Arquimedes Napolini", distance: 2.4},{ destino: "Vera Cruz", distance: 1.7},{destino: "Centro", distance: 1.6},{destino: "Cruzeiro Do Sul", distance: 2.2},{destino: "Mina Brasil", distance: 2.1}],
    //Maria Ceu
    [{ destino: "Monte Castelo", distance: 3.1},{ destino: "Vila Floresta II", distance: 2.9},{ destino: "Santo Antônio", distance: 2.4},{destino: "Coloninha Zili", distance: 2.1},{destino: "Mina Do Mato", distance: 2.8},{destino: "Operária Nova", distance: 1.2},{destino: "Santa Catarina", distance: 1.3},{destino: "Vera Cruz", distance: 2.5}],
    //Metropol
    [{ destino: "São Marcos", distance: 1.1},{destino: "Catarinense", distance: 2.3},{destino: "Estaçãozinha", distance: 1.6},{destino: "Poço Um", distance: 1.3},{destino: "Vila Miguel", distance: 0.75},{destino: "Vila São José", distance: 1.3},{destino: "Vila Visconde", distance: 2.3}],
    //Michel
    [{ destino: "Santos Dumont", distance: 2.1},{ destino: "Santa Bárbara", distance: 1.3},{ destino: "Operária Nova", distance: 2.4},{ destino: "Centro", distance: 2.3},{ destino: "Pio Corrêa", distance: 2.7},{destino: "Ceará", distance: 3.7},{destino: "Comerciário", distance: 1.2},{destino: "São Luiz", distance: 1.0}],
    //Milanese
    [{ destino: "Pinheirinho", distance: 2.8},{ destino: "Jardim Angélica", distance: 4.0},{destino: "Fábio Silva", distance: 1.5},{destino: "Recanto Verde", distance: 1.9},{destino: "Santos Dumont", distance: 0.28},{inicio:"" ,destino: "São Luiz", distance: 1.4}],
    //Mina do Brasil
    [{ destino: "Pinheirinho", distance: 3.7},{ destino: "Lote Seis", distance: 2.1},{destino: "Cruzeiro Do Sul", distance: 1.8},{destino: "Próspera", distance: 4.2},{destino: "São Simão", distance: 6.6}],
    //Mina do Mato
    [{ destino: "Coloninha Zili", distance: 1.9},{ destino: "Laranjinha", distance: 5.3},{ destino: "Maria Céu", distance: 2.8},{ destino: "São Sebastião", distance: 5.9}],
    //Mina União
    [{ destino: "Distrito Industrial", distance: 1.6},{ destino: "Cidade Mineira", distance: 1.6},{ destino: "Mineira Nova", distance: 1.3},{ destino: "São Defende", distance: 5.6},{destino: "São Sebastião", distance: 1.6},{destino: "Vila Belmiro", distance: 0.9}],
    //Minera Nova
    [{ destino: "Liberdade", distance: 1.3},{ destino: "Mina União", distance: 1.3},{ destino: "Dagostin", distance: 1.6},{ destino: "Vila Isabel", distance: 2.9},{ destino: "Imperatriz", distance: 0.7},{ destino: "Mineira Velha", distance: 1.2}],
    //Mineira Velha 
    [{ destino: "Promorar Vila Vitoria", distance: 1.3},{ destino: "Vila Belmiro", distance: 1.6},{ destino: "Mineira Nova", distance: 1.2},{ destino: "Imperatriz", distance: 0.8},{ destino: "São Francisco", distance: 1.3},{ destino: "Santa Augusta", distance: 1.1},{ destino: "Universitário", distance: 2.3},{ destino: "Vila Manaus", distance: 0.8}],
    //Monte Castelo
    [{ destino: "Vila Zuleima", distance: 0.74},{ destino: "Vila Floresta II", distance: 1.6},{ destino: "Estaçãozinha", distance: 2.9},{ destino: "Vila Floresta II", distance: 1.6},{ destino: "Maria Céu", distance: 3.1},{ destino: "Coloninha Zili", distance: 2.1}],
    //Morro Estevão
    [{ destino: "Dagostin", distance: 2.4},{ destino: "Sangão", distance: 4.2},{ destino: "Jardim Paineiras", distance: 3.2},{ destino: "Pedro Zanivan", distance: 1.9}],
    //Nossa Senhora da Salete
    [{ destino: "Ceará", distance: 3.1},{ destino: "Jardim Maristela", distance: 2.9},{ destino: "Linha Anta", distance: 3.7},{ destino: "Ana Maria", distance: 3.2},{ destino: "Cristo Redentor", distance: 3.6},{ destino: "Próspera", distance: 2.6},{ destino: "Vila Rica", distance: 3.2}],
    //Operária Nova
    [{ destino: "Santa Bárbara", distance: 1.3},{ destino: "Maria Céu", distance: 1.2},{ destino: "Santo Antônio", distance: 1.8},{ destino: "Centro", distance: 3.0},{ destino: "Santa Catarina", distance: 1.7},{ inicio:"" ,destino: "Michel", distance: 2.4}],
    //Paraíso
    [{ destino: "Boa Vista", distance: 1},{ destino: "Jardim Angélica", distance: 3.6},{ destino: "Santa Augusta", distance: 1.5},{ destino: "São Francisco", distance: 1.2},{ destino: "Pinheirinho", distance: 2.0},{ destino: "Santa Bárbara", distance: 2.9},{ destino: "Santo Antônio", distance: 4.2},{ destino: "Vila Floresta", distance: 1.6}],
    //Pedro Zanivan
    [{ destino: "Morro Estêvão", distance: 1.9},{ destino: "Sangão", distance: 3.9},{ destino: "Jardim Paineiras", distance: 2.6}],
    //Pinheirinho
    [{ destino: "Santo Antônio", distance: 2.4},{ destino: "Vila Floresta", distance: 3.1},{ destino: "Paraíso", distance: 2.0},{ destino: "Jardim Angélica", distance: 2.6},{ destino: "Santa Augusta", distance: 1.7},{ destino: "Milanese", distance: 2.8},{ destino: "Santa Bárbara", distance: 3.2},{ destino: "Santos Dumont", distance: 2.6}],
    //Pio Corrêa
    [{ destino: "Centro", distance: 1.1},{ destino: "Cruzeiro Do Sul", distance: 1.6},{ destino: "Comerciário", distance: 1.9},{ destino: "Michel", distance: 2.7},{ destino: "São Cristóvão", distance: 1.4},{ destino: "Próspera", distance: 1.8}],
    //Poço Um
    [ { destino: "Metropol", distance: 1.3},{ destino: "Colonial", distance: 1.2}],
    //Primeira Linha
    [{ destino: "Recanto Verde", distance: 3.6},{ destino: "Jardim Angélica", distance: 5.8},{ destino: "Universitário", distance: 6.8},{ destino: "Jardim Paineiras", distance: 1.6},{ destino: "Sangão", distance: 5.3},{ destino: "Renascer", distance: 4.0}],
    //Progresso
    [{ destino: "Jardim União", distance: 0.17},{ destino: "Santa Luzia", distance: 0.64},{ destino: "Promorar Vila Vitoria", distance: 1.1},{ destino: "Vila Belmiro", distance: 1.3},{ destino: "Conjunto H. Nova Esperança", distance: 1.9},{ destino: "São Sebastião", distance: 1.1},{ destino: "Vila Nova Esperança", distance: 2.2}],
    //Promorar Vila Vitória
    [{ destino: "Vila Belmiro", distance: 0.6},{ destino: "Mineira Nova", distance: 1.2},{ destino: "Imperatriz", distance: 1.7},{ destino: "Jardim União", distance: 1.0},{ destino: "Mineira Velha", distance: 1.3},{ destino: "Progresso", distance: 1.1},{ destino: "Santa Luzia", distance: 0.95},{ destino: "Vila Manaus", distance: 0.75}],
    //Próspera
    [{ destino: "São Cristóvão", distance: 2.1},{ destino: "Pio Corrêa", distance: 1.8},{ destino: "Cruzeiro Do Sul", distance: 3.0},{ destino: "Mina Brasil", distance: 4.2},{ destino: "Ceará", distance: 2.4},{ destino: "Nossa Senhora Da Salete", distance: 2.6},{ destino: "Vila Rica", distance: 3.1},{ destino: "Brasília", distance: 1.6}],
    //Quarta Linha
    [{ destino: "Verdinho", distance: 9.7},{ destino: "Dagostin", distance: 3.1}],
    //Recanto Verde
    [{ destino: "Fábio Silva", distance: 1.8},{ destino: "Milanese", distance: 1.9},{ destino: "Santos Dumont", distance: 2.1},{ destino: "São Luiz", distance: 2.1},{ destino: "Jardim Paineiras", distance: 2.7},{ destino: "Renascer", distance: 2.8},{ destino: "Primeira Linha", distance: 3.6}],
    //Renascer
    [{ destino: "Primeira Linha", distance: 4.0},{ destino: "Recanto Verde", distance: 1.9},{ destino: "Fábio Silva", distance: 2.1},{ destino: "São Marcos", distance: 2.1},{ destino: "Ana Maria", distance: 2.8},{ destino: "Argentina", distance: 2.9},{ destino: "Jardim Paineiras", distance: 3.1},{ destino: "São Luiz", distance: 5.2}],
    //Rio Maina
    [{ destino: "Wosocris", distance: 1.5},{ destino: "Catarinense", distance: 2.1},{ destino: "Cidade Mineira", distance: 2.6},{ destino: "Liberdade", distance: 1.9},{ destino: "Vila Isabel", distance: 0.7}],
    //Sangão
    [{ destino: "Primeira Linha", distance: 5.3},{ destino: "Universitário", distance: 6.1},{ destino: "Jardim Angélica", distance: 5.1},{ destino: "Verdinho", distance: 8.3},{ destino: "Pedro Zanivan", distance: 3.9},{ destino: "Morro Estêvão", distance: 4.2}],
    //Santa Augusta
    [{ destino: "São Francisco", distance: 1.3},{ destino: "Mineira Velha", distance: 1.1},{ destino: "Vila Manaus", distance: 1.9},{ destino: "Jardim Angélica", distance: 2.4},{ destino: "Paraíso", distance: 1.5},{ destino: "Pinheirinho", distance: 1.7},{ destino: "Universitário", distance: 1.0}],
    //Santa Bárbara
    [{ destino: "Santo Antônio", distance: 2.0},{ destino: "Pinheirinho", distance: 3.2},{ destino: "Vila Floresta", distance: 3.1},{ destino: "Paraíso", distance: 2.9},{ destino: "Centro", distance: 2.8},{ destino: "Michel", distance: 1.3},{ destino: "Operária Nova", distance: 1.3},{ destino: "Santa Catarina", distance: 2.5},{ destino: "São Cristóvão", distance: 1.8}],
    //Santa Catarina
    [{ destino: "Operária Nova", distance: 1.7},{ destino: "Maria Céu", distance: 1.3},{ destino: "Santa Bárbara", distance: 2.5},{ destino: "Centro", distance: 3.6},{ destino: "Maria Céu", distance: 1.3},{ destino: "Vera Cruz", distance: 2.8}],
    //Santa Luzia
    [{ destino: "Jardim União", distance: 0.74},{ destino: "Promorar Vila Vitoria", distance: 0.95},{ destino: "Vila Manaus", distance: 1.3},{ destino: "Universitário", distance: 2.5},{ destino: "Progresso", distance: 0.65},{ destino: "Vila Rica", distance: 1.3}],
    //Santo Antônio
    [{ destino: "Vila Floresta II", distance: 2.9},{ destino: "Vila Floresta", distance: 3.3},{ destino: "Paraíso", distance: 4.2},{ destino: "Maria Céu", distance: 2.4},{ destino: "Operária Nova", distance: 1.8},{ destino: "Pinheirinho", distance: 2.4},{ destino: "Santa Bárbara", distance: 2.0}],
    //Santos Dumont
    [{ destino: "Santa Bárbara", distance: 1.8},{ destino: "Pinheirinho", distance: 2.6},{ destino: "Milanese", distance: 0.28},{ destino: "São Luiz", distance: 1.8},{ destino: "Recanto Verde", distance: 2.1},{ destino: "Michel", distance: 2.1},{ destino: "Fábio Silva", distance: 1.7}],
    //São Cristóvão
    [{ destino: "Comerciário", distance: 1.1},{ destino: "Pio Corrêa", distance: 1.4},{ destino: "Centro", distance: 1.3},{ destino: "Próspera", distance: 2.1},{ destino: "Centro", distance: 1.3},{ destino: "Ceará", distance: 1.4}],
    //São Defende
    [{ destino: "Cidade Mineira", distance:5 },{ destino: "São Sebastião", distance:4.2 },{ destino: "Mineira Nova", distance:5.6 },{ destino: "Conjunto H. Nova Esperança", distance:4.6 }],
    //São Francisco
    [{ destino: "Boa Vista", distance: 949},{ destino: "Liberdade", distance: 1},{ destino: "Imperatriz", distance: 0.7},{ destino: "Mineira Velha", distance: 1.3},{ destino: "Paraíso", distance: 1.2},{ destino: "Santa Augusta", distance: 1.3}],
    //São João
    [{ destino: "Renascer", distance: 5.2},{ destino: "Jardim Paineiras", distance: 2},{ destino: "Cristo Redentor", distance: 5.3},{ destino: "Ana Maria", distance: 4.0}],
    //São Luiz
    [{ destino: "Michel", distance: 1},{ destino: "Santos Dumont", distance: 1.8},{ destino: "Milanese", distance: 1.4},{ destino: "Renascer", distance: 3.9},{ destino: "Recanto Verde", distance: 2.1},{ destino: "Fábio Silva", distance: 0.75},{ destino: "Ceará", distance: 4.1},],
    //São Marcos
    [{ destino: "Vila Nova Esperança", distance: 0.9},{ destino: "Metropol", distance: 1.1}],
    //São Sebastião
    [{ destino: "Mineira Nova", distance: 1.6},{ destino: "Vila Belmiro", distance: 1.6},{ destino: "Jardim União", distance: 1.1},{ destino: "Progresso", distance: 1.1},{ destino: "São Defende", distance: 4.2}],
    //São Simão
    [{ destino: "Argentina", distance: 6.2},{ destino: "Mina Brasil", distance: 6.6},{ destino: "Linha Batista", distance: 3.4}],
    //Universitário
    [{ destino: "Santa Augusta", distance: 1.0},{ destino: "Mineira Velha", distance: 2.3},{ destino: "Vila Manaus", distance: 1.8},{ destino: "Santa Luzia", distance: 2.5},{ destino: "Vila Nova Esperança", distance: 3.3},{ destino: "Sangão", distance: 6.1},{ destino: "Primeira Linha", distance: 6.8},{ destino: "Jardim Angélica", distance: 2.8}],
    //Vera Cruz
    [{ destino: "Maria Céu", distance: 2.5},{ destino: "Santa Catarina", distance: 2.8},{ destino: "Lote Seis", distance: 1.7},{ destino: "Cruzeiro Do Sul", distance: 2.4},{ destino: "Centro", distance: 1.8},{ destino: "Arquimedes Napolini", distance: 2.6}],
    //Verdinho
    [{ destino: "Sangão", distance: 8.3},{ destino: "Quarta Linha", distance: 9.7},{ destino: "Dagostin", distance: 9.4}],
    //Vila Belmiro
    [{ destino: "Mineira Nova", distance: 0.9},{ destino: "Mineira Nova", distance: 0.9},{ destino: "Imperatriz", distance: 1.3},{ destino: "São Sebastião", distance: 1.6},{ destino: "Promorar Vila Vitoria", distance: 0.6},{ destino: "Progresso", distance: 1.3},{ destino: "Mineira Velha", distance: 1.6},{ destino: "Jardim União", distance: 1.1}],
    //Vila Floresta
    [{ destino: "Vila Floresta II", distance: 1.1},{ destino: "Paraíso", distance: 1.6},{ destino: "Boa Vista", distance: 1},{ destino: "Pinheirinho", distance: 3.1},{ destino: "Primeira Linha", distance: 3.1},{ inicio:"" ,destino: "Santo Antônio", distance: 3.3}],
    //Vila Floresta II
    [{ destino: "Boa Vista", distance:1.1 },{ destino: "Monte Castelo", distance:1.6 },{ destino: "Vila Zuleima", distance:1.3 },{ destino: "Vila Francesa", distance:1.4 },{ destino: "Liberdade", distance:1.6 },{ destino: "Maria Céu", distance: 2.9},{ destino: "Santo Antônio", distance: 2.9},{ destino: "Vila Floresta", distance: 1.1}],
    //Vila Francesa
    [{ destino: "Vila Isabel", distance: 1.6},{ destino: "Rio Maina", distance: 1.3},{ destino: "Vila São José", distance: 3.2},{ destino: "Wosocris", distance: 2.1},{ destino: "Catarinense", distance: 2.8},{ destino: "Distrito Industrial", distance: 2.1},{ destino: "Liberdade", distance: 1.9},{ destino: "Monte Castelo", distance: 1.6},{ destino: "Vila Floresta II", distance: 1.4},{ destino: "Vila Zuleima", distance: 0.55}],
    //Vila Isabel
    [{ destino: "Wosocris", distance: 1.2},{ destino: "Rio Maina", distance: 0.7},{ destino: "Vila Macarini", distance: 1.5},{ destino: "Vila Visconde", distance: 2.5},{ destino: "Vila Francesa", distance: 1.6},{ destino: "Mineira Nova", distance: 2.9},{ destino: "Liberdade", distance: 2.3},{ destino: "Distrito Industrial", distance: 1.9},{ destino: "Cidade Mineira", distance: 2.3}],
    //Vila Macarini
    [{ destino: "Catarinense", distance: 1.2},{ destino: "Vila Visconde", distance: 1.3},{ destino: "Vila São José", distance: 2.3},{ destino: "Wosocris", distance: 0.45},{ destino: "Vila Isabel", distance: 1.5},{ inicio:"" ,destino: "Cidade Mineira", distance: 2.4}],
    //Vila Manaus
    [{ destino: "Promorar Vila Vitoria", distance: 0.74},{ destino: "Mineira Velha", distance: 0.8},{ destino: "Universitário", distance: 1.8},{ destino: "Santa Luzia", distance: 1.3},{ destino: "Santa Augusta", distance: 1.9},{ destino: "Laranjinha", distance: 1.6}],
    //Vila Miguel
    [{ destino: "Metropol", distance: 0.74},{ destino: "São Sebastião", distance: 0.9},{ destino: "Estaçãozinha", distance: 1.0}],
    //Vila Nova Esperança
    [{ destino: "Conjunto H. Nova Esperança", distance:0.34 },{ destino: "Progresso", distance:2.2 },{ destino: "Santa Luzia", distance:1.3 },{ destino: "Vera Cruz", distance: 3.3}],
    //Vila Rica
    [{ destino: "Próspera", distance: 3.1},{ destino: "Nossa Senhora Da Salete", distance: 3.2},{ destino: "Linha Batista", distance: 4.3},{ destino: "Brasília", distance: 1.9},{ destino: "Argentina", distance: 2.2}],
    //Vila São José
    [{ destino: "Estaçãozinha", distance: 0.6},{ destino: "Metropol", distance: 1.3},{ destino: "Wosocris", distance: 2.0},{ destino: "Vila Visconde", distance: 2.1},{ destino: "Vila Macarini", distance: 2.3},{ inicio:"" ,destino: "Catarinense", distance: 1.2}],
    //Vila Visconde
    [{ destino:6 , distance:1.7 },{ destino:10 , distance:1.2 },{ destino:"Vila São José" , distance:2.1 },{ destino:32 , distance:2.3 },{ destino: "Vila Macarini", distance: 1.3},{ destino: "Vila Isabel", distance: 2.5},{ destino: "Cidade Mineira", distance: 3.5}],
    //Vila Zuleima
    [{ destino: "Vila Francesa", distance:0.54 },{ destino: "Vila Floresta II", distance: 1.3}],
    //Wosocris
    [{ destino: "Vila Macarini", distance: 0.44},{ destino: "Catarinense", distance: 1.1},{ destino: "Vila São José", distance: 2},{ destino: "Vila Isabel", distance: 1.2},{ destino: "Vila Francesa", distance: 2.1},{ destino: "Rio Maina", distance: 1.5},{ destino: "Cidade Mineira", distance: 2.2}]
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
