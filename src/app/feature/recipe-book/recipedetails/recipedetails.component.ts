import {Component, Input, OnInit} from '@angular/core';
import {RecipeServiceService} from "../recipe-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.scss']
})
export class RecipedetailsComponent implements OnInit {
  recipeID: number = 0
  recipeDetail : {
    title: string,
    description: string,
    image: string
  } = {title: '', description: '', image: ''};
  listOfRecipes : {id: number, title: string, description: string, image: string} [] = []
  constructor(private recipeService: RecipeServiceService, private route: ActivatedRoute, private router : Router) {
  }
  ngOnInit(): void {
    this.recipeID = +this.route.snapshot.params['id'];
    this.listOfRecipes = this.recipeService.recipes;
    this.findOneRecipe(this.recipeID)
  }
  findOneRecipe(id : number) {
    const recipeFoundIndex = this.listOfRecipes.findIndex(recipe => {
      return recipe.id === id;
    })
    const recipeFound = this.listOfRecipes[recipeFoundIndex]
    this.recipeDetail = {...recipeFound}
    console.log(recipeFound)
  }

  onBackClick(){
    this.router.navigate(['/recipes'], {relativeTo: this.route})
  }



}
