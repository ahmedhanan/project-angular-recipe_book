import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  selectedRecipe = new EventEmitter<{title: string,
    description: string,
    image: string}>()
  constructor() { }
}
