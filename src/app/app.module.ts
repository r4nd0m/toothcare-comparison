import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainviewComponent } from './mainview/mainview.component';
import { InsuranceProviderComponent } from './insurance-provider/insurance-provider.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
	declarations: [
		AppComponent,
		MainviewComponent,
		InsuranceProviderComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		ChartsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
