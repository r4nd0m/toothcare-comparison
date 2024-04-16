import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceProviderComponent } from './insurance-provider.component';
import { AppModule } from '../../app.module';

describe('InsuranceProviderComponent', () => {
  let component: InsuranceProviderComponent;
  let fixture: ComponentFixture<InsuranceProviderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
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
