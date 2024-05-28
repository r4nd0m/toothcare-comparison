import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                RouterModule.forRoot([]), 
                RouterOutlet, 
                RouterLinkActive
            ]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
