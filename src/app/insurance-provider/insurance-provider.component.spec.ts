import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceProviderComponent } from './insurance-provider.component';

describe('InsuranceProviderComponent', () => {
  let component: InsuranceProviderComponent;
  let fixture: ComponentFixture<InsuranceProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
