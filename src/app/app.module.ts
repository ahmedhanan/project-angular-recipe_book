import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './feature/shopping-list/shopping-list.component';
import { RecipeBookComponent } from './feature/recipe-book/recipe-book.component';
import { RecipecardComponent } from './feature/recipe-book/recipecard/recipecard.component';
import { RecipedetailsComponent } from './feature/recipe-book/recipedetails/recipedetails.component';
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './users/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RegisterComponent } from './users/register/register.component';

const appRoutes : Routes = [
  {path: '*', component: AppComponent},
  {path: 'recipes', component: RecipeBookComponent},
  {path: 'recipe/:id', component: RecipedetailsComponent},
  {path: 'shop', component: ShoppingListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    RecipecardComponent,
    RecipedetailsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
