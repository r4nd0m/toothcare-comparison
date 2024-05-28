import { ProvidersComponent } from './providers/providers.component';
import { DiagramComponent } from './diagram/diagram.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
	{ path: '', component: ProvidersComponent },
	{ path: 'diagram', component: DiagramComponent },
	{ path: '**', redirectTo: '' }
];