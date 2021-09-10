import {Component, Input, OnInit} from '@angular/core';
import {RecipeServiceService} from "../recipe-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recipecard',
  templateUrl: './recipecard.component.html',
  styleUrls: ['./recipecard.component.scss']
})
export class RecipecardComponent implements OnInit {
  @Input() recipeData : {
    id: number,
    title: string,
    description: string,
    image: string
  } = {
    id: 0,
    title: '',
    description:'',
    image: ''
  }

  constructor(private recipeService: RecipeServiceService, private router : Router) { }

  ngOnInit(): void {
  }

  onClick(){
    this.router.navigate(['/recipe', this.recipeData.id])
  }

}
