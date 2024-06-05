import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataService } from '../data.service';
import { InsuranceProviderComponent } from './insurance-provider/insurance-provider.component';
import { ProvidersComponent } from './providers.component';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

describe('ProvidersComponent', () => {
    let component: ProvidersComponent;
    let fixture: ComponentFixture<ProvidersComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterModule.forRoot([]), 
                RouterOutlet, 
                RouterLinkActive,
                InsuranceProviderComponent
            ],
            providers: [DataService]
        }).compileComponents();
    }));



    beforeEach(() => {
        fixture = TestBed.createComponent(ProvidersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
