import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainviewComponent } from './mainview/mainview.component';
import { InsuranceProviderComponent } from './mainview/insurance-provider/insurance-provider.component';

import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { CalculateButtonDirective } from './mainview/calculate.button.directive.directive';

@NgModule({
	declarations: [
		AppComponent,
		CalculateButtonDirective,
		MainviewComponent,
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
