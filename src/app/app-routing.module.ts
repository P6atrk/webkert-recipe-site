import { NgModule } from '@angular/core';
import { RecipeComponent } from './pages/main/recipe/recipe.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
	},
	{
		path: 'signup',
		loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule)
	},
	{
		path: 'not-found',
		loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
	},
	{
		path: 'main',
		loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
		canActivate: [AuthGuard]
	},
	{
		path: 'main/:name',
		component: RecipeComponent,
		canActivate: [AuthGuard]
	},
	{
		path: '',
		loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
	},
	{
		path: '**',
		loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
