import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InsuranceProvider } from '../../model';

@Component({
	selector: 'insurance-provider',
	templateUrl: './insurance-provider.component.html',
	styleUrls: ['./insurance-provider.component.css']
})
export class InsuranceProviderComponent implements OnInit {
	@Input() provider: InsuranceProvider = new InsuranceProvider();
	@Output('onRemove') removeEmitter = new EventEmitter();
	@Output('onUpdate') updateEmitter = new EventEmitter();

	element_id = 'insurance_provider_' + Math.random() + Math.random();


	constructor() { }

	ngOnInit() {
	}

	addPrice() {
		this.provider.addPrice();
		this.updateEmitter.emit(null);
	}

	removeProvider() {
		this.removeEmitter.emit(null);
		this.updateEmitter.emit(null);
	}

	removePrice(index: number) {
		this.provider.prices.splice(index, 1);
		this.updateEmitter.emit(null);
	}

	onModelChange() {
		this.updateEmitter.emit(null);
	}

}
