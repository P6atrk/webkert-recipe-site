import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommentService } from 'src/app/shared/services/comment.service';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { Comment } from '../../../shared/models/comment';

@Component({
	selector: 'app-recipe',
	templateUrl: './recipe.component.html',
	styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, OnDestroy {

	recipe: any;
	recipeName?: any;
	comments?: Array<Comment>;

	commentSubscription?: Subscription;

	constructor(
		private activatedRoute: ActivatedRoute,
		private commentService: CommentService,
		private recipeService: RecipeService) {
		this.recipe = { name: "", time: 0, description: "" };
	}

	ngOnInit(): void {
		this.recipeService.readByName(this.activatedRoute.snapshot.paramMap.get('name') as string).subscribe(recipes => {
			recipes.forEach(recipe => {
				this.recipe = recipe.data();
				this.commentService.readByRecipe(this.recipe).subscribe(comments => {
					this.comments = comments;
				});
			})
		})



		console.log("RECIPE_NAME" + this.recipeName);
	}

	ngOnChanges(): void {
		this.commentSubscription = this.commentService.readByRecipe(this.recipe).subscribe(comments => {
			this.comments = comments;
		});
	}

	ngOnDestroy(): void {
		this.commentSubscription?.unsubscribe();
	}
}
