import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe.component';

const routes: Routes = [
	{ path: 'comment', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule)},
	{ path: '', component: RecipeComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RecipeRoutingModule { }
