import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { InsurancePeriod, InsurancePrice, InsuranceProvider, MissingTeethData, Theme } from '../model';

@Injectable()
export class DataService {
    private selectedTheme: WritableSignal<Theme> = signal<Theme>(localStorage.getItem('selectedTheme') ? JSON.parse(localStorage.getItem('selectedTheme')) : 'light');
    
    private loadedProviders: InsuranceProvider[] = localStorage.getItem('insuranceProviders') ? JSON.parse(localStorage.getItem('insuranceProviders')) : [];

    private dummyProviders = [
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
    ];

    providers: WritableSignal<InsuranceProvider[]>;

    private loadedMissingTeethData = localStorage.getItem('missingTeethData') ? JSON.parse(localStorage.getItem('missingTeethData')) : {
        teeth_min: 2,
        teeth_max: 15,
        tooth_price: 1500
    };

    private missingTeethData: WritableSignal<MissingTeethData> = signal<MissingTeethData>(this.loadedMissingTeethData);

    constructor () {
        if (this.loadedProviders.length === 0) {
            this.loadedProviders = this.dummyProviders;
        }

        this.providers = signal<InsuranceProvider[]>(this.loadedProviders);
    }

    public getProviders(): InsuranceProvider[] {
        return this.providers();
    }

    public getProvidersSignal(): Signal<InsuranceProvider[]> {
        return this.providers.asReadonly();
    }

    public addNewProvider() {
        this.providers.update((providers: InsuranceProvider[]) => {
            providers.push(new InsuranceProvider());
            return providers;
        });

        this.saveProviders();
    }

    public updateProvider(index: number, provider: InsuranceProvider) {
        this.providers.update((providers: InsuranceProvider[]) => {
            providers[index] = Object.assign(providers[index], provider);
            return providers;
        });

        this.saveProviders();
    }

    public removeProvider(index: number) {
        this.providers.update((providers: InsuranceProvider[]) => {
            providers.splice(index, 1);
            return providers;
        });

        this.saveProviders();
    }

    public getMissingTeethDataSignal(): Signal<MissingTeethData> {
        return this.missingTeethData.asReadonly();
    }

    public getSelectedThemeSignal(): Signal<Theme> {
        return this.selectedTheme.asReadonly();
    }

    public getMissingTeethData(): MissingTeethData {
        return this.missingTeethData();
    }

    public getSelectedTheme(): Theme {
        return this.selectedTheme();
    }

    public setMissingTeethData(data: MissingTeethData) {
        this.missingTeethData.set(data);
        this.saveMissingTeethData();
    }
    

    public toggleSelectedTheme() {
        if (this.selectedTheme() === 'light') {
            this.selectedTheme.set('dark');
        } else {
            this.selectedTheme.set('light');
        }

        this.saveSelectedTheme();
    }

    private saveProviders() {
        localStorage.setItem('insuranceProviders', JSON.stringify(this.providers()));
    }

    private saveMissingTeethData() {
        localStorage.setItem('missingTeethData', JSON.stringify(this.missingTeethData()));
    }

    private saveSelectedTheme() {
        localStorage.setItem('selectedTheme', JSON.stringify(this.selectedTheme()));
    }
}
