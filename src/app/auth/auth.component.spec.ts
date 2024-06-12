import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { UserCredentials } from '../model';
import { AuthService } from './auth.service';
import { Router, RouterModule } from '@angular/router';

describe('AuthComponent', () => {
    let component: AuthComponent;
    let authServiceMock: any;
    let routerMock: any;
    let fixture: ComponentFixture<AuthComponent>;

    beforeEach(async () => {
        authServiceMock = { login: jest.fn() };
        routerMock = { navigate: jest.fn() };

        await TestBed.configureTestingModule({
            imports: [AuthComponent, FormsModule, RouterModule],
            declarations: [],
            providers: [
                { provide: AuthService, useValue: authServiceMock },
                { provide: Router, useValue: routerMock }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(AuthComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should navigate to home page on successful login', async () => {
        authServiceMock.login.mockResolvedValue();
        component.authForm.setValue(<UserCredentials>{ email: 'test@example.com', password: 'test123' });
        fixture.detectChanges();

        await component.onSubmit();

        expect(authServiceMock.login).toHaveBeenCalledWith(<UserCredentials>{ email: 'test@example.com', password: 'test123' });

        expect(component.errorMessage()).toEqual('');

        expect(routerMock.navigate).toHaveBeenCalledWith(['/']);
    });

    it('should set error message on failed login', async () => {
        component.authForm.setValue(<UserCredentials>{ email: 'test@example.com', password: 'test123' });
        authServiceMock.login.mockRejectedValue('Error message');

        await component.onSubmit();
        expect(component.errorMessage()).toEqual('Error message');
    });
});
