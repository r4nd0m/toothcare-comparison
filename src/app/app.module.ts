import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProvidersComponent } from './providers/providers.component';
import { InsuranceProviderComponent } from './providers/insurance-provider/insurance-provider.component';

import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { CalculateButtonDirective } from './providers/calculate.button.directive';

@NgModule({
	declarations: [
		AppComponent,
		CalculateButtonDirective,
		ProvidersComponent,
		InsuranceProviderComponent
	],
	imports: [
		BaseChartDirective,
		BrowserModule,
		FormsModule
	],
	providers: [provideCharts(withDefaultRegisterables())],
	bootstrap: [AppComponent]
})
export class AppModule { }
