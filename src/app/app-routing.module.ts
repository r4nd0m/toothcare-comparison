import { NgModule } from '@angular/core';
import { ProvidersComponent } from './providers/providers.component';
import { DiagramComponent } from './diagram/diagram.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
	{ path: '', component: ProvidersComponent },
	{ path: 'diagram', component: DiagramComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
