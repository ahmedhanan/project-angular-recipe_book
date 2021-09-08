import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit {
  numbers = [1,2,3,4,5,6,7,8,9,10]
  constructor() { }

  ngOnInit(): void {
  }

}
