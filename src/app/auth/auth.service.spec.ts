import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { UserCredentials } from '../model';

describe('AuthService', () => {
    let service: AuthService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AuthService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should log in with valid credentials', async () => {
        const validCredentials: UserCredentials = {
            email: 'valid@email',
            password: 'validpassword'
        };

        await service.login(validCredentials);

        expect(service.isLoggedIn()).toBe(true);
    });

    it('should not log in with invalid credentials', async () => {
        const invalidCredentials: UserCredentials = {
            email: 'invalid@email',
            password: 'invalidpassword'
        };

        try {
            await service.login(invalidCredentials);
        } catch (error) {
            expect(error).toBe('Error happened, please try again');
        }

        expect(service.isLoggedIn()).toBe(false);
    });

    it('should log out', () => {
        service.logout();

        expect(service.isLoggedIn()).toBe(false);
    });
});
