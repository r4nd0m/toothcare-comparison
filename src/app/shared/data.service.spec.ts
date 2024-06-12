import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { InsurancePeriod, InsurancePrice, InsuranceProvider } from '../model';

describe('DataService', () => {
    let service: DataService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DataService]
        });
        service = TestBed.inject(DataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should have 5 dummy providers on creation', () => {
        expect(service.getProviders().length).toBe(5);
    });

    it('should add an empty provider', () => {
        service.addNewProvider();
        expect(service.getProviders().length).toBe(6);
    });

    it('should remove a provider', () => {
        service.removeProvider(0);
        expect(service.getProviders().length).toBe(5);
    });

    it('should update a provider', () => {
        const provider = new InsuranceProvider(
            'Updated Provider',
            [
                new InsurancePrice(new InsurancePeriod(37, 39), 25.2),
                new InsurancePrice(new InsurancePeriod(40, 49), 38.18),
                new InsurancePrice(new InsurancePeriod(50, 59), 50.14)
            ],
            90
        );
        service.updateProvider(0, provider);
        expect(service.getProviders()[0].name).toBe('Updated Provider');
    });

    it('should remove a specific provider', () => {
        const provider = new InsuranceProvider(
            'Updated Provider for deletion',
            [
                new InsurancePrice(new InsurancePeriod(37, 39), 25.2),
                new InsurancePrice(new InsurancePeriod(40, 49), 38.18),
                new InsurancePrice(new InsurancePeriod(50, 59), 50.14)
            ],
            90
        );
        service.updateProvider(3, provider);
        service.removeProvider(3);
        
        expect(service.getProviders().length).toBe(4);

        service.getProviders().forEach((provider, index) => {
            expect(provider.name).not.toBe('Updated Provider for deletion');
        });

    });

    it('should return missing teeth data', () => {
        const data = service.getMissingTeethData();
        expect(data).toBeTruthy();
    });

    it('should set missing teeth data', () => {
        const newData = {
            teeth_min: 3,
            teeth_max: 16,
            tooth_price: 1600
        };
        service.setMissingTeethData(newData);
        const data = service.getMissingTeethData();
        expect(data).toEqual(newData);
    });
});