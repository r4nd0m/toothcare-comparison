import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramComponent } from './diagram.component';
import { CalculateButtonDirective } from '../providers/calculate.button.directive';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { ToRgbaPipe } from '../shared/to-rgba.pipe';
import { DataService } from '../data.service';
import { CalculationService } from '../calculation.service';

describe('DiagramComponent', () => {
  let component: DiagramComponent;
  let fixture: ComponentFixture<DiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BaseChartDirective,
        CalculateButtonDirective
      ],
	    providers: [
        provideCharts(withDefaultRegisterables()), 
        ToRgbaPipe,
        CalculationService,
        DataService
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(DiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
