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
		path: 'diagram', 
		loadComponent: () => 
			import ('./diagram/diagram.component').then(
				(mod) => mod.DiagramComponent
			)
	},
	{ path: '**', redirectTo: '' }
];