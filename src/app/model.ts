export class InsuranceProvider {
	name: string = "";					// provider's name
	prices: Array<InsurancePrice> = [];
	coverage_part: number = 0;

	constructor(name?: string, prices?: Array<InsurancePrice>, coverage_part?: number) {
		if (name !== undefined) {
			this.name = name;
		}

		if (prices !== undefined) {
			this.prices = prices;
		}

		if (coverage_part !== undefined) {
			this.coverage_part = coverage_part;
		}
	}

	public addPrice(price?: InsurancePrice): void {
		if (price !== undefined) {
			this.prices.push(price);
		}
		else {
			this.prices.push(new InsurancePrice());
		}
	}
}

export class InsurancePrice {
	period: InsurancePeriod = new InsurancePeriod();
	price: number = 0;			// insurance price during the selected period

	constructor(period?: InsurancePeriod, price?: number) {
		if (period !== undefined) {
			this.period = period;
		}

		if (price !== undefined) {
			this.price = price;
		}
	}
}

export class InsurancePeriod {
	start!: number; // ages at the start and end of insurance period
	end!: number;

	constructor(start?: number, end?: number) {
		if (start !== undefined) {
			this.start = start;
		}

		if (end !== undefined) {
			this.end = end;
		}
	}
}

export type ProviderCalculationResult = {
	label: string,
	data: number[],
	backgroundColor: string,
	borderColor: string
}

export type ProviderCalculationResultItem = {
	name: string,
	total_years: string,
	total_coverage_price: string,
	total_treatment_price: string,
	self_paid: string,
	total_paid: string,
	overpaid: number
}

export type MissingTeethData = {
	teeth_min: number,
	teeth_max: number,
	tooth_price: number
}

export type UserCredentials = {
	email: string,
	password: string
}

export enum Theme { 
	light = 'light', 
	dark = 'dark' 
};
