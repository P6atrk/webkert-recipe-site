import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RecipeComponent } from './recipe/recipe.component';
import { CommentComponent } from './recipe/comment/comment.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    MainComponent,
    RecipeComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
	MatTableModule,
	MatIconModule,
	MatFormFieldModule,
	MatButtonModule,
	MatInputModule,
	ReactiveFormsModule,
	FormsModule,
	MatCardModule
  ]
})
export class MainModule { }
