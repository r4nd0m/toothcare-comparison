import { Injectable } from '@angular/core';
import { ProviderCalculationResultItem, InsuranceProvider, MissingTeethData, ProviderCalculationResult } from './model.js';

@Injectable({
	providedIn: 'root'
})
export class CalculationService {

	constructor() { }

	public calculate(providers: InsuranceProvider[], missingTeethData: MissingTeethData): ProviderCalculationResult[] {
		const lineChartData: ProviderCalculationResult[] = [];

		providers.forEach((provider) => {

			let random_color_rgb = this.getRandomColorRGB();

			let result: ProviderCalculationResult = {
				label: provider.name,
				data: [],
				backgroundColor: 'rgba(' + random_color_rgb + ',1)',
				borderColor: 'rgba(' + random_color_rgb + ',1)'
			};

			for (let teeth_count = missingTeethData.teeth_min; teeth_count <= missingTeethData.teeth_max; teeth_count++) {
				result.data.push(this.calculateForProvider(provider, teeth_count, missingTeethData.tooth_price).overpaid);
			}

			lineChartData.push(result);
		})

		return lineChartData;
	}

	private calculateForProvider(provider: InsuranceProvider, missing_teeth: number, missing_tooth_price: number): ProviderCalculationResultItem {
		let total_years = provider.prices.reduce(
			(acc, price) => {
				let total_years = 1 + price.period.end - price.period.start;

				return acc + total_years;
			},
			0
		);
		let total_treatment_price = missing_teeth * missing_tooth_price;
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
			total_years: total_years.toString(),
			total_coverage_price: total_coverage_price.toFixed(2),
			total_treatment_price: total_treatment_price.toFixed(2),
			self_paid: self_paid.toFixed(2),
			total_paid: total_paid.toFixed(2),
			overpaid: total_paid - total_treatment_price
		};
	}


	private getRandomColorRGB(): string {
		return [
			Math.floor(Math.random() * 255),
			Math.floor(Math.random() * 228),
			Math.floor(Math.random() * 228)
		].join(',');
	}
}
