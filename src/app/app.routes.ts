import { Routes } from '@angular/router';

export const appRoutes: Routes = [
	{
		path: '', 
		loadComponent: () =>
			import ('./providers/providers.component').then(
				(mod) => mod.ProvidersComponent
			) 
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
			)
	},
	{ path: '**', redirectTo: '' }
];