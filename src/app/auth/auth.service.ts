import { Injectable, WritableSignal, signal } from '@angular/core';
import { UserCredentials } from '../model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    // 'invalid' credentials are used to emulate login service error
    private invalidUserCredentials: UserCredentials = {
        email: 'invalid@email',
        password: 'invalidpassword'
    };

    isLoggedIn: WritableSignal<boolean> = signal(false);

    constructor() { }

    login(userCredentials: UserCredentials): Promise<void> {

        if (userCredentials.email === this.invalidUserCredentials.email && userCredentials.password === this.invalidUserCredentials.password) {
            this.isLoggedIn.set(false);

            return Promise.reject('Error happened, please try again');
        } else {
            this.isLoggedIn.set(true);

            return Promise.resolve();
        }
    }

    logout() {
        this.isLoggedIn.set(false);
    }
}
