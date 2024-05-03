import { Component } from '@angular/core';
import { InsuranceProvider, MissingTeethData } from '../model';
import { DataService } from '../data.service';

@Component({
	selector: 'providers',
	templateUrl: './providers.component.html',
	styleUrls: ['./providers.component.css']
})
export class ProvidersComponent {
	providers: InsuranceProvider[] = [];

	missingTeethData: MissingTeethData;

	constructor(
		private dataService: DataService
	) {
		this.providers = dataService.getProviders();
		this.missingTeethData = dataService.getMissingTeethData();

		dataService.providersChanged.subscribe(
			(providers: InsuranceProvider[]) => this.providers = providers
		)
	}

	addProvider() {
		this.dataService.addNewProvider();
	}

	updateProvider(index: number, provider: InsuranceProvider) {
		this.dataService.updateProvider(index, provider);
	}

	removeProvider(index: number) {
		this.dataService.removeProvider(index);
	}

	changeProviders() {
		this.providers = this.dataService.getProviders();
	}

	changeMissingTeethData() {
		this.dataService.setMissingTeethData(this.missingTeethData);
	}
}
