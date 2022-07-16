import { Component, OnInit } from '@angular/core';
import { Comida } from '../comida';
import { COMIDAS, SANDWICHES, PAPAS, PROMOS, EMPANDAS } from '../elementos-menu';
import { Empanadas } from '../empanadas';
import { papas } from '../papas';
import { promos } from '../promos';
import { sandwiches } from '../sandwiches';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css']
})
export class ItemMenuComponent implements OnInit {
  selecComida: Comida[] = COMIDAS;
  sandwiches: sandwiches[] = SANDWICHES;
  empas: Empanadas[] = EMPANDAS;
  promo: promos[] = PROMOS;
  papa: papas[] = PAPAS;

  descripcionComida: string = 'La descripcion de la comida acá.';

  constructor() { }

  ngOnInit(): void {
  }

}
