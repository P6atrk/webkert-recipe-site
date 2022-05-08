import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/shared/models/comment';
import { Recipe } from 'src/app/shared/models/recipe';

@Component({
	selector: 'app-recipe',
	templateUrl: './recipe.component.html',
	styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

	recipe: Recipe;
	comments: Array<Comment>;

	constructor() { 
		this.comments = [
			{name:'HIIH', comment:'ez egy komment amugy.'},
			{name:'HIIH', comment:'ez egy komment amugy1.'},
			{name:'HIIH', comment:'ez egy komment amugy2.'},
			{name:'HIIH', comment:'ez egy komment amugy3.'},
			{name:'HIIH', comment:'ez egy komment amugy4.'},
			{name:'HIIH', comment:'ez egy komment amugy5.'},
			{name:'HIIH', comment:'ez egy komment amugy6.'},
			{name:'HIIH', comment:'ez egy komment amugy7.'},
			{name:'HIIH', comment:'ez egy komment amugy8.'},
			{name:'HIIH', comment:'ez egy komment amugy9.'}
		];
		this.recipe = {name:'RECIPE_NAME', time:45, description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in viverra neque. Fusce fermentum ipsum tristique, mattis sapien in, tincidunt neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Donec vitae purus at tortor suscipit semper et non lorem. Sed placerat, nunc ut fringilla elementum, turpis risus lacinia urna, vel vestibulum mauris arcu at nunc. Cras faucibus, leo eget feugiat pulvinar, quam odio fringilla mauris, non interdum magna purus id eros. Cras vel feugiat velit, id sollicitudin diam. Aliquam erat volutpat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi auctor lacinia augue in egestas. Maecenas quis quam sem. Vestibulum elementum quam elit, et condimentum risus convallis ac. Donec malesuada quis lectus vitae tempor. Fusce interdum faucibus lectus. Nullam lacinia vitae tellus at egestas. Pellentesque id rutrum lorem. Nunc sed nisl orci. Curabitur lectus metus, aliquam nec dictum sed, convallis sed sapien. Vestibulum dapibus sit amet urna a viverra. Nulla facilisi. Ut facilisis orci risus, ac dignissim mi vulputate sit amet. Nullam aliquet velit in pharetra maximus. Mauris id efficitur mi.Quisque tincidunt, eros quis egestas semper, libero ante tristique mi, id hendrerit velit erat ac eros. Sed a volutpat est, vitae porta velit. Fusce magna felis, semper blandit elementum vel, congue et nunc. Aenean vulputate, ipsum eu convallis commodo, ipsum nibh facilisis mauris, ut feugiat metus mi eget dolor. Vivamus tempor enim vel nisi varius, nec elementum tortor blandit. Mauris nec commodo mauris. Nunc id faucibus dui, sed suscipit lorem. Donec ullamcorper ex molestie libero volutpat, ut rutrum ipsum venenatis. Nulla nec maximus eros. Vestibulum sollicitudin sem nec elit volutpat tristique. Praesent sit amet ligula ac sem varius ullamcorper sit amet a mauris. Pellentesque id tincidunt orci, sit amet tempor ipsum. Praesent molestie velit in varius dignissim. Etiam pulvinar congue sagittis. In ultricies luctus quam eu varius. Aliquam ac scelerisque tortor, sit amet pellentesque elit. Nam in quam vestibulum, tempus urna et, pharetra diam. Suspendisse sed nulla a purus euismod aliquam. Proin aliquam fringilla sem ut pellentesque. Duis vel tortor erat. Donec ornare semper tincidunt. Maecenas at mollis ex. Duis vestibulum, libero sit amet porta facilisis, nisi lorem viverra sem, in faucibus urna mi eu dui.'};
	}

	ngOnInit(): void {
	}

}
