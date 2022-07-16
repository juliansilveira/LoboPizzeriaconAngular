import { Component, OnInit } from '@angular/core';
import { Comida } from '../comida';
import { COMIDAS, SANDWICHES, PAPAS, EMPANDAS,PROMOS } from '../elementos-menu';
import { Empanadas } from '../empanadas';
import { papas } from '../papas';
import { promos } from '../promos';
import { sandwiches } from '../sandwiches';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  comidaElegida: Comida[] = COMIDAS;
  sandwiches: sandwiches[] = SANDWICHES;
  empas: Empanadas[] = EMPANDAS;
  promo: promos[] = PROMOS;
  papa: papas[] = PAPAS;
  constructor() { }

  ngOnInit(): void {
  }

}
