import { Component, OnInit } from '@angular/core';
import { InsuranceProvider, InsurancePeriod, InsurancePrice, MissingTeethData, ProviderCalculationResult } from '../model';
import { CalculationService } from '../calculation.service';

@Component({
	selector: 'mainview',
	templateUrl: './mainview.component.html',
	styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {
	providers: Array<InsuranceProvider> = [];
	missingTeethData: MissingTeethData = {
		teeth_min: 2,
		teeth_max: 15,
		tooth_price: 1500
	};

	calculating = false;

	lineChartData: ProviderCalculationResult[] = [];
	lineChartLabels: string[] = [];

	lineChartType: string = 'line';

	constructor(private calculationService: CalculationService) {
		this.providers.push(
			new InsuranceProvider(
				"AOK Premium",
				[
					new InsurancePrice(new InsurancePeriod(37, 39), 25.2),
					new InsurancePrice(new InsurancePeriod(40, 49), 38.18),
					new InsurancePrice(new InsurancePeriod(50, 59), 50.14)
				],
				90
			),
			new InsuranceProvider(
				"AOK optimal",
				[
					new InsurancePrice(new InsurancePeriod(37, 39), 17.44),
					new InsurancePrice(new InsurancePeriod(40, 49), 25.99),
					new InsurancePrice(new InsurancePeriod(50, 59), 37.51)
				],
				70
			),
			new InsuranceProvider(
				"AOK kompakt",
				[
					new InsurancePrice(new InsurancePeriod(37, 39), 11.85),
					new InsurancePrice(new InsurancePeriod(40, 49), 17.91),
					new InsurancePrice(new InsurancePeriod(50, 59), 26.23)
				],
				50
			),
			new InsuranceProvider(
				"Württembergische",
				[
					new InsurancePrice(new InsurancePeriod(37, 39), 34.37),
					new InsurancePrice(new InsurancePeriod(40, 49), 41.67),
					new InsurancePrice(new InsurancePeriod(50, 59), 47.63)
				],
				90
			),
			new InsuranceProvider(
				"Die Bayerische",
				[
					new InsurancePrice(new InsurancePeriod(37, 39), 32.6),
					new InsurancePrice(new InsurancePeriod(40, 49), 41.4),
					new InsurancePrice(new InsurancePeriod(50, 59), 54.4)
				],
				100
			)
		)
	}

	ngOnInit() {
	}

	addProvider() {
		this.providers.push(new InsuranceProvider());
	}

	removeProvider(index: number) {
		this.providers.splice(index, 1);
	}

	recalculate() {
		this.calculating = true;
		this.lineChartData = [];
		this.lineChartLabels = [];
		
		setTimeout(() => {
			this.lineChartData = this.calculationService.calculate(this.providers, this.missingTeethData);

			for (let teethCount = this.missingTeethData.teeth_min; teethCount <= this.missingTeethData.teeth_max; teethCount++) {
				this.lineChartLabels.push(teethCount.toString());
			}

			this.calculating = false;
		}, 10);
	}

}
