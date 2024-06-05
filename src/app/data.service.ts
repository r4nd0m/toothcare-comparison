import { Injectable } from '@angular/core';
import { InsurancePeriod, InsurancePrice, InsuranceProvider, MissingTeethData } from './model';
import { Subject } from 'rxjs';

@Injectable()
export class DataService {
    providersChanged = new Subject<InsuranceProvider[]>();

    private missingTeethData: MissingTeethData = {
        teeth_min: 2,
        teeth_max: 15,
        tooth_price: 1500
    };

    private providers: InsuranceProvider[] = [
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
        )];

    constructor() { }

    public getProviders(): InsuranceProvider[] {
        return this.providers.slice();
    }

    public addNewProvider() {
        this.providers.push(new InsuranceProvider());
        this.providersChanged.next(this.getProviders());
    }

    public updateProvider(index: number, provider: InsuranceProvider) {
        this.providers[index] = Object.assign(this.providers[index], provider);
        this.onProvidersChanged();
    }

    public removeProvider(index: number) {
        this.providers.splice(index, 1);
        this.onProvidersChanged();
    }

    private onProvidersChanged() {
        this.providersChanged.next(this.getProviders());
    }

    public getMissingTeethData(): MissingTeethData {
        return { ...this.missingTeethData };
    }

    public setMissingTeethData(data: MissingTeethData) {
        this.missingTeethData = data;
    }
}
