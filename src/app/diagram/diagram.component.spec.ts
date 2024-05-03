import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagramComponent } from './diagram.component';
import { AppModule } from '../app.module';

describe('DiagramComponent', () => {
  let component: DiagramComponent;
  let fixture: ComponentFixture<DiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppModule ],
      declarations: [DiagramComponent]
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
