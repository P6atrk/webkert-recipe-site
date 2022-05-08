import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Recipe } from 'src/app/shared/models/recipe';
import { RecipeService } from 'src/app/shared/services/recipe.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnChanges {

	displayedColumns: string[] = ['name', 'time', 'button'];
	recipes?: Array<Recipe>;

	constructor(private recipeService: RecipeService) {
	}

	ngOnInit(): void {
		this.recipeService.readAll().subscribe(recipes => {
			this.recipes = recipes;
		});
	}

	ngOnChanges(changes: SimpleChanges): void {
		this.recipeService.readAll().subscribe(recipes => {
			this.recipes = recipes;
		});
	}

}
