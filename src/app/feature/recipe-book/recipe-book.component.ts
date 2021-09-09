import {Component, EventEmitter, OnInit} from '@angular/core';
import {RecipeServiceService} from "./recipe-service.service";

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.scss']
})
export class RecipeBookComponent implements OnInit {
  recipes : {title: string, description: string, image: string}[] = [
    {
      title: 'Test',
      description:
        '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolor eaque fuga laudantium neque non sapiente tempore. A adipisci atque exercitationem expedita fuga minima nisi numquam qui vel, voluptates. Ullam.',
      image : 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
    },
    {
      title: 'Test2',
      description:
        '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolor eaque fuga laudantium neque non sapiente tempore. A adipisci atque exercitationem expedita fuga minima nisi numquam qui vel, voluptates. Ullam.',
      image : 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Test3',
      description:
        '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolor eaque fuga laudantium neque non sapiente tempore. A adipisci atque exercitationem expedita fuga minima nisi numquam qui vel, voluptates. Ullam.',
      image : 'https://images.unsplash.com/photo-1612392061787-2d078b3e573c?ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Test4',
      description:
        '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolor eaque fuga laudantium neque non sapiente tempore. A adipisci atque exercitationem expedita fuga minima nisi numquam qui vel, voluptates. Ullam.',
      image : 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    },
    {
      title: 'Test5',
      description:
        '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dolor eaque fuga laudantium neque non sapiente tempore. A adipisci atque exercitationem expedita fuga minima nisi numquam qui vel, voluptates. Ullam.',
      image : 'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'
    }
  ];
  selectedRecipe : { title: string; description: string; image: string } = {
    title: '',
    description: '',
    image: ''
  };

  constructor(private recipeService: RecipeServiceService) {
  }

  ngOnInit(): void {
    this.recipeService.selectedRecipe.subscribe(value => this.selectedRecipe = value)
  }

}
