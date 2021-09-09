import {Component, Input, OnInit} from '@angular/core';
import {RecipeServiceService} from "../recipe-service.service";

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.scss']
})
export class RecipedetailsComponent implements OnInit {
  recipeDetail : {
    title: string,
    description: string,
    image: string
  } = {title: '', description: '', image: ''};
  constructor(private recipeService: RecipeServiceService) {
    this.recipeService.selectedRecipe.subscribe(data => this.recipeDetail = data)
  }
  ngOnInit(): void {
  }

}
