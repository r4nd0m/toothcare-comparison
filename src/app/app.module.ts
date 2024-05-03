import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProvidersComponent } from './providers/providers.component';
import { InsuranceProviderComponent } from './providers/insurance-provider/insurance-provider.component';

import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { CalculateButtonDirective } from './providers/calculate.button.directive';
import { DiagramComponent } from './diagram/diagram.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
	{ path: '', component: ProvidersComponent },
	{ path: 'diagram', component: DiagramComponent}
];

@NgModule({
	declarations: [
		AppComponent,
		CalculateButtonDirective,
		DiagramComponent,
		ProvidersComponent,
		InsuranceProviderComponent
	],
	imports: [
		BaseChartDirective,
		BrowserModule,
		FormsModule,
		RouterModule.forRoot(appRoutes)
	],
	providers: [provideCharts(withDefaultRegisterables())],
	bootstrap: [AppComponent]
})
export class AppModule { }
