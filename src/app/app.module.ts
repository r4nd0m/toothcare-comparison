import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { ToRgbaPipe } from './to-rgba.pipe';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [provideCharts(withDefaultRegisterables()), ToRgbaPipe],
	bootstrap: [AppComponent]
})
export class AppModule { }
