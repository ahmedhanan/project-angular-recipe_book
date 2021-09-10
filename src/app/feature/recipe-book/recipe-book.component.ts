import {Component, EventEmitter, OnInit} from '@angular/core';
import {RecipeServiceService} from "./recipe-service.service";

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit {
  recipesList : {id: number, title: string, description: string, image: string}[] = [];
  selectedRecipe : { title: string; description: string; image: string } = {
    title: '',
    description: '',
    image: ''
  };

  constructor(private recipeService: RecipeServiceService) {
  }

  ngOnInit(): void {
    this.recipesList = this.recipeService.recipes
    this.recipeService.selectedRecipe.subscribe(value => this.selectedRecipe = value)
  }

}
