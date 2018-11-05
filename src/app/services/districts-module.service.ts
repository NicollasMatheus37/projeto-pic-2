import { Injectable } from '@angular/core';

@Injectable()
export class DistrictsModuleService {

  protected name = "districts";

  /* exemplo de variável a ser adicionada */
  private centro: String = ""; /* variáveis com camelCase, tipadas e inciadas */
  private cruzeiroDoSul: String = "";

  constructor() { }

  getDistrict() {
    
  }

}
