import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients= [new Ingredient('chicken',1),
new Ingredient('apples',8),
new Ingredient('tomato',4),
new Ingredient('brinjal',5)];
  constructor() { }

  ngOnInit(): void {
  }

}
