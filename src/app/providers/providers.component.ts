import { Component } from '@angular/core';
import { InsuranceProvider, MissingTeethData } from '../model';
import { DataService } from '../data.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'providers',
	templateUrl: './providers.component.html',
	styleUrls: ['./providers.component.css']
})
export class ProvidersComponent {
	providers: InsuranceProvider[] = [];
	missingTeethDataForm: FormGroup;

	constructor(
		private dataService: DataService
	) {
		this.providers = dataService.getProviders();

		const missingTeethData = dataService.getMissingTeethData();
		this.missingTeethDataForm = new FormGroup({
			'teeth_min': new FormControl(missingTeethData.teeth_min),
			'teeth_max': new FormControl(missingTeethData.teeth_max),
			'tooth_price': new FormControl(missingTeethData.tooth_price)
		});

		dataService.providersChanged.subscribe(
			(providers: InsuranceProvider[]) => this.providers = providers
		)
		
		this.missingTeethDataForm.valueChanges.subscribe(
			() => this.changeMissingTeethData()
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
		this.dataService.setMissingTeethData(this.missingTeethDataForm.value);
	}
}
