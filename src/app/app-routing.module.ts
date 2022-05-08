import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
	{ path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },
	{ path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
	{ path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
	{ path: 'main', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
	{ path: 'recipe', loadChildren: () => import('./pages/recipe/recipe.module').then(m => m.RecipeModule) },
	{ path: '', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
	{ path: '**', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
