import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeComponent } from './recipe.component';
import { CommentComponent } from './comment/comment.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    RecipeComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
	MatFormFieldModule,
	MatButtonModule,
	MatInputModule,
	ReactiveFormsModule,
	FormsModule,
	MatCardModule
  ]
})
export class RecipeModule { }
