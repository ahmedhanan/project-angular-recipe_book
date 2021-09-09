import {Component, Input, OnInit} from '@angular/core';
import {RecipeServiceService} from "../recipe-service.service";

@Component({
  selector: 'app-recipecard',
  templateUrl: './recipecard.component.html',
  styleUrls: ['./recipecard.component.scss']
})
export class RecipecardComponent implements OnInit {
  @Input() recipeData : {
    title: string,
    description: string,
    image: string
  } = {
    title: '',
    description:'',
    image: ''
  }

  constructor(private recipeService: RecipeServiceService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.recipeService.selectedRecipe.emit(this.recipeData)
  }

}
