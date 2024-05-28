import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { CalculateButtonDirective } from './providers/calculate.button.directive';
import { DiagramComponent } from './diagram/diagram.component';
import { AppRoutingModule } from './app-routing.module';
import { ToRgbaPipe } from './to-rgba.pipe';

@NgModule({
	declarations: [
		AppComponent,
		CalculateButtonDirective,
		DiagramComponent
	],
	imports: [
		BaseChartDirective,
		BrowserModule,
		AppRoutingModule
	],
	providers: [provideCharts(withDefaultRegisterables()), ToRgbaPipe],
	bootstrap: [AppComponent]
})
export class AppModule { }
