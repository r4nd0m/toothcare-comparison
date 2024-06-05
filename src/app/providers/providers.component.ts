import { CommonModule } from '@angular/common';
import { Component, Signal, inject } from '@angular/core';
import { InsuranceProvider, MissingTeethData } from '../model';
import { DataService } from '../data.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InsuranceProviderComponent } from './insurance-provider/insurance-provider.component';
import { RouterModule } from '@angular/router';

@Component({
	standalone: true,
	imports: [InsuranceProviderComponent, ReactiveFormsModule, CommonModule, RouterModule],
	selector: 'providers',
	templateUrl: './providers.component.html',
	styleUrls: ['./providers.component.css'],
})
export class ProvidersComponent {
	providers: Signal<InsuranceProvider[]>;
	missingTeethDataForm: FormGroup;

	private dataService = inject(DataService);

	constructor() {
		this.providers = this.dataService.getProvidersSignal();

		const missingTeethData: MissingTeethData = this.dataService.getMissingTeethData();
		
		this.missingTeethDataForm = new FormGroup({
			'teeth_min': new FormControl(missingTeethData.teeth_min),
			'teeth_max': new FormControl(missingTeethData.teeth_max),
			'tooth_price': new FormControl(missingTeethData.tooth_price)
		});
		
		this.missingTeethDataForm.valueChanges.subscribe( 
			() => this.dataService.setMissingTeethData(this.missingTeethDataForm.value)
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
}
