import { Component, OnInit } from '@angular/core';
import { InsuranceProvider, MissingTeethData, ProviderCalculationResult } from '../model';
import { CalculationService } from '../calculation.service';
import { DataService } from '../data.service';

@Component({
	selector: 'mainview',
	templateUrl: './mainview.component.html',
	styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {
	providers: InsuranceProvider[] = [];

	missingTeethData: MissingTeethData = {
		teeth_min: 2,
		teeth_max: 15,
		tooth_price: 1500
	};

	calculating = false;

	lineChartData: ProviderCalculationResult[] = [];
	lineChartLabels: string[] = [];

	lineChartType: string = 'line';

	constructor(
		private calculationService: CalculationService, 
		private dataService: DataService
	) {
		this.providers = dataService.getProviders();
		dataService.providersChanged.subscribe(
			(providers: InsuranceProvider[]) => this.providers = providers
		)
	}

	ngOnInit() {
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

	recalculate() {
		this.calculating = true;
		this.lineChartData = [];
		this.lineChartLabels = [];
		
		setTimeout(() => {
			this.lineChartData = this.calculationService.calculate(this.dataService.getProviders(), this.missingTeethData);

			for (let teethCount = this.missingTeethData.teeth_min; teethCount <= this.missingTeethData.teeth_max; teethCount++) {
				this.lineChartLabels.push(teethCount.toString());
			}

			this.calculating = false;
		}, 10);
	}

}
