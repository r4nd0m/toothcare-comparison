import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainviewComponent } from './mainview.component';
import { AppModule } from '../app.module';

describe('MainviewComponent', () => {
  let component: MainviewComponent;
  let fixture: ComponentFixture<MainviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ AppModule ],
      declarations: [ MainviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
