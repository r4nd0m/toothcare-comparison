import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InsuranceProvider, InsurancePrice } from '../../model';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'insurance-provider',
	templateUrl: './insurance-provider.component.html',
	styleUrls: ['./insurance-provider.component.css']
})
export class InsuranceProviderComponent implements OnInit {
	@Input() provider: InsuranceProvider = new InsuranceProvider();
	@Output('onRemove') removeEmitter = new EventEmitter<null>();
	@Output('onUpdate') updateEmitter = new EventEmitter<InsuranceProvider>();

	insuranceProviderForm: FormGroup;

	element_id = 'insurance_provider_' + Math.random() + Math.random();

	constructor() { }

	ngOnInit() {
		this.insuranceProviderForm = new FormGroup({
			'name': new FormControl(this.provider.name),
			'coverage_part': new FormControl(this.provider.coverage_part),
			'prices': new FormArray([])
		});

		this.provider.prices.forEach(
			(price) => {
				(<FormArray>this.insuranceProviderForm.get('prices')).push(
					this.buildPriceFormGroup(price)
				)
			}
		);

		this.insuranceProviderForm.valueChanges.subscribe(
			() => this.updateEmitter.emit(this.insuranceProviderForm.value as InsuranceProvider)
		)
	}

	addPrice() {
		const priceFormGroup: FormGroup = this.buildPriceFormGroup();

		(<FormArray>this.insuranceProviderForm.get('prices')).push(priceFormGroup);

		this.updateEmitter.emit(this.insuranceProviderForm.value);
	}

	// required for iterating over the prices inside of template
	get prices() {
		return (this.insuranceProviderForm.get('prices') as FormArray).controls;
	}

	removeProvider() {
		this.removeEmitter.emit(null);
	}

	removePrice(index: number) {
		(<FormArray>this.insuranceProviderForm.get('prices')).removeAt(index);
	}

	private buildPriceFormGroup(price?: InsurancePrice): FormGroup {
		return new FormGroup({
			'period': new FormGroup({
				'start': new FormControl(price?.period.start),
				'end': new FormControl(price?.period.end),
			}),
			'price': new FormControl(price?.price),
		});
	}
}
