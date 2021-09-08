import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.scss']
})
export class RecipedetailsComponent implements OnInit {
  @Input() recipeDetail : {
    title: string,
    description: string,
    image: string
  } = {title: '', description: '', image: ''};
  constructor() { }

  ngOnInit(): void {
  }

}
