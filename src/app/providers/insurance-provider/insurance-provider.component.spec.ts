import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceProviderComponent } from './insurance-provider.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InsurancePeriod, InsurancePrice, InsuranceProvider } from '../../model';

describe('InsuranceProviderComponent', () => {
    let component: InsuranceProviderComponent;
    let fixture: ComponentFixture<InsuranceProviderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InsuranceProviderComponent);
        component = fixture.componentInstance;
        fixture.componentRef.setInput('provider', new InsuranceProvider(
            "Die Bayerische",
            [
                new InsurancePrice(new InsurancePeriod(37, 39), 32.6),
                new InsurancePrice(new InsurancePeriod(40, 49), 41.4),
                new InsurancePrice(new InsurancePeriod(50, 59), 54.4)
            ],
            100
        ));
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
