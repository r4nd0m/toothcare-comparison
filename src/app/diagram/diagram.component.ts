import { Component, OnInit } from '@angular/core';
import { InsuranceProvider, MissingTeethData, ProviderCalculationResult } from '../model';
import { CalculationService } from '../calculation.service';
import { DataService } from '../data.service';

@Component({
	selector: 'diagram',
	templateUrl: './diagram.component.html',
	styleUrl: './diagram.component.css'
})
export class DiagramComponent implements OnInit {
	providers: InsuranceProvider[] = [];

	calculating = false;

	lineChartData: ProviderCalculationResult[] = [];
	lineChartLabels: string[] = [];

	missingTeethData: MissingTeethData;

	constructor(
		private calculationService: CalculationService,
		private dataService: DataService
	) {
		this.providers = dataService.getProviders();
	}

	ngOnInit() {
		this.recalculate();
	}

	recalculate() {
		this.calculating = true;
		this.lineChartData = [];
		this.lineChartLabels = [];

		// emulate long asynchronous calculation
		setTimeout(() => {
			const missingTeethData: MissingTeethData = this.dataService.getMissingTeethData();

			this.lineChartData = this.calculationService.calculate(this.dataService.getProviders(), missingTeethData);

			for (let teethCount = missingTeethData.teeth_min; teethCount <= missingTeethData.teeth_max; teethCount++) {
				this.lineChartLabels.push(teethCount.toString());
			}

			this.calculating = false;
		}, 10);
	}
}
