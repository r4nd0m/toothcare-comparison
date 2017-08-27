import { Component, OnInit } from '@angular/core';
import { InsuranceProvider, InsurancePeriod, InsurancePrice } from '../model';

@Component({
	selector: 'mainview',
	templateUrl: './mainview.component.html',
	styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit {
	providers: Array<InsuranceProvider> = [];
	missing_tooth_price: number = 1500;
	missing_teeth_min = 2;
	missing_teeth_max = 15;

	calculating = false;

	lineChartData: Array<any> = [];
	lineChartLabels: Array<any> = [];

	lineChartOptions: any = {
		responsive: true
	};

	lineChartColors: Array<any> = [];
	lineChartLegend: boolean = true;
	lineChartType: string = 'line';

	constructor() {
		this.providers.push(
			new InsuranceProvider(
				"AOK Premium",
				[
					new InsurancePrice(new InsurancePeriod(37, 39), 25.2),
					new InsurancePrice(new InsurancePeriod(40, 49), 38.18),
					new InsurancePrice(new InsurancePeriod(50, 59), 50.14),
					//new InsurancePrice(new InsurancePeriod(60, 100), 61.97)
				],
				90
			),
			new InsuranceProvider(
				"AOK optimal",
				[
					new InsurancePrice(new InsurancePeriod(37, 39), 17.44),
					new InsurancePrice(new InsurancePeriod(40, 49), 25.99),
					new InsurancePrice(new InsurancePeriod(50, 59), 37.51),
					//new InsurancePrice(new InsurancePeriod(60, 100), 46.35)
				],
				70
			),
			new InsuranceProvider(
				"AOK kompakt",
				[
					new InsurancePrice(new InsurancePeriod(37, 39), 11.85),
					new InsurancePrice(new InsurancePeriod(40, 49), 17.91),
					new InsurancePrice(new InsurancePeriod(50, 59), 26.23),
					//new InsurancePrice(new InsurancePeriod(60, 100), 32.62)
				],
				50
			),
			new InsuranceProvider(
				"Württembergische",
				[
					new InsurancePrice(new InsurancePeriod(37, 39), 34.37),
					new InsurancePrice(new InsurancePeriod(40, 49), 41.67),
					new InsurancePrice(new InsurancePeriod(50, 59), 47.63),
					//new InsurancePrice(new InsurancePeriod(60, 100), 53.96)
				],
				90
			),
			new InsuranceProvider(
				"Die Bayerische",
				[
					new InsurancePrice(new InsurancePeriod(37, 39), 32.6),
					new InsurancePrice(new InsurancePeriod(40, 49), 41.4),
					new InsurancePrice(new InsurancePeriod(50, 59), 54.4),
					//new InsurancePrice(new InsurancePeriod(60, 100), 66.2)
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
		setTimeout(() => {
			this.calculate();
			this.calculating = false;
		}, 2000);
	}

	calculate() {
		this.lineChartColors.splice(0, this.lineChartColors.length);
		this.lineChartData = [];
		this.lineChartLabels.splice(0, this.lineChartLabels.length);

		for (let teeth_count = this.missing_teeth_min; teeth_count <= this.missing_teeth_max; teeth_count++) {
			this.lineChartLabels.push(teeth_count);
		}

		this.providers.forEach((provider) => {
			let result = { label: provider.name, data: [] };
			for (let teeth_count = this.missing_teeth_min; teeth_count <= this.missing_teeth_max; teeth_count++) {
				result.data.push(this.calculateForProvider(provider, teeth_count).overpaid);
			}

			this.lineChartData.push(result);

			let random_color_rgb = this.getRandomColor();

			this.lineChartColors.push({
				backgroundColor: 'rgba(' + random_color_rgb + ',0.1)',
				borderColor: 'rgba(' + random_color_rgb + ',1)',
				pointBackgroundColor: 'rgba(148,159,177,1)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgba(148,159,177,0.8)'
			});
		})
	}

	calculateForProvider(provider: InsuranceProvider, missing_teeth: number) {
		let total_years = provider.prices.reduce(
			(acc, price) => {
				let total_years = 1 + price.period.end - price.period.start;

				return acc + total_years;
			},
			0
		);
		let total_treatment_price = missing_teeth * this.missing_tooth_price;
		let total_coverage_price = provider.prices.reduce(
			(acc, price) => {
				let total_years = 1 + price.period.end - price.period.start;
				let period_price = price.price * total_years * 12;

				return acc + period_price;
			},
			0
		);
		let self_paid = total_treatment_price * (1 - provider.coverage_part / 100); // how much to pay except the coverage
		let total_paid = self_paid + total_coverage_price; 							// how much will be paid by user during the insurance time

		return {
			name: provider.name,
			total_years: total_years,
			total_coverage_price: total_coverage_price.toFixed(2),
			total_treatment_price: total_treatment_price.toFixed(2),
			self_paid: self_paid.toFixed(2),
			total_paid: total_paid.toFixed(2),
			overpaid: (total_paid - total_treatment_price).toFixed(2)
		};
	}

	private getRandomColor(): string {
		return [
			Math.floor(Math.random() * 255),
			Math.floor(Math.random() * 228),
			Math.floor(Math.random() * 228)
		].join(',');
	}

}
