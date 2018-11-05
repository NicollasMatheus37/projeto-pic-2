import { Injectable } from '@angular/core';

@Injectable()
export class DistancesModuleService {

  protected name = "distances";

  /* exemplo de variável a ser adicionada */
  private distances = [ /* objeto */
    {inicio: "", destino: "", distance: ""}, /* início: bairro 1 - destino: bairro 2 - distance: distancia entre eles */
    {inicio: "", destino: "", distance: ""},
    {inicio: "", destino: "", distance: ""}
  ]

  constructor() { }

}
