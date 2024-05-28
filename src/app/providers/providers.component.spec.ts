import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersComponent } from './providers.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ProvidersComponent', () => {
    let component: ProvidersComponent;
    let fixture: ComponentFixture<ProvidersComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule]
        })
            .compileComponents();
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
