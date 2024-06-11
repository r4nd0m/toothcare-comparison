import { Routes } from '@angular/router';
import { authGuardFn } from './auth/auth.guard';

const authUrl = '/auth';

export const appRoutes: Routes = [
	{
		path: '', 
		loadComponent: () =>
			import ('./providers/providers.component').then(
				(mod) => mod.ProvidersComponent
			),
		canActivate: [authGuardFn(authUrl)]
	},
	{ 
		path: 'auth', 
		loadComponent: () => 
			import ('./auth/auth.component').then(
				(mod) => mod.AuthComponent
			)
	},
	{ 
		path: 'diagram', 
		loadComponent: () => 
			import ('./diagram/diagram.component').then(
				(mod) => mod.DiagramComponent
			),
		canActivate: [authGuardFn(authUrl)]
	},
	{ path: '**', redirectTo: '' }
];