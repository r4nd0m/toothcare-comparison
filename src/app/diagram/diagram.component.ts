import { Component, OnInit, Signal, inject, signal } from '@angular/core';
import { InsuranceProvider, MissingTeethData, ProviderCalculationResult } from '../model';
import { CalculationService } from '../calculation.service';
import { DataService } from '../data.service';
import { CalculateButtonDirective } from '../providers/calculate.button.directive';
import { ToRgbaPipe } from '../shared/to-rgba.pipe';

import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';

@Component({
	standalone: true,
	imports: [
		BaseChartDirective,
		CalculateButtonDirective,
		ToRgbaPipe
	],
	providers: [provideCharts(withDefaultRegisterables())],
	selector: 'diagram',
	templateUrl: './diagram.component.html',
	styleUrl: './diagram.component.css'
})
export class DiagramComponent implements OnInit {
	providersSignal: Signal<InsuranceProvider[]>;
	missingTeethDataSignal: Signal<MissingTeethData>;

	calculatingSignal = signal<boolean>(false);

	lineChartDataSignal = signal<ProviderCalculationResult[]>([]);
	lineChartLabelsSignal = signal<string[]>([]);


	private calculationService = inject(CalculationService);
	private dataService = inject(DataService);


	constructor() {
		this.providersSignal = this.dataService.getProvidersSignal();
		this.missingTeethDataSignal = this.dataService.getMissingTeethDataSignal();
	}

	ngOnInit() {
		this.recalculate();
	}

	recalculate() {
		this.calculatingSignal.set(true);
		let lineChartLabels: string[] = [];

		// emulate long asynchronous calculation
		setTimeout(() => {
			const missingTeethData: MissingTeethData = this.missingTeethDataSignal();


			for (let teethCount = missingTeethData.teeth_min; teethCount <= missingTeethData.teeth_max; teethCount++) {
				lineChartLabels.push(teethCount.toString());
			}

			this.lineChartDataSignal.set(this.calculationService.calculate(this.dataService.getProviders(), missingTeethData));
			this.lineChartLabelsSignal.set(lineChartLabels);

			this.calculatingSignal.set(false);
		}, 10);
	}
}
