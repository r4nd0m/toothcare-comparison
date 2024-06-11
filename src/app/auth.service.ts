import { Injectable, WritableSignal, signal } from '@angular/core';
import { UserCredentials } from './model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    
    // 'invalid' credentials are used to emulate login service error
    private invalidUserCredentials: UserCredentials = {
        email: 'invalid@email',
        password: 'invalidpassword'
    };

    isLoggedIn: WritableSignal<boolean> = signal(true);

    constructor() { }

    login(userCredentials: UserCredentials): Promise<void> {
        console.log(`User ${userCredentials.email} logged in.`)

        if (userCredentials.email === this.invalidUserCredentials.email && userCredentials.password === this.invalidUserCredentials.password) {
            this.isLoggedIn.set(false);

            return Promise.reject('Error happened, please try again');
        } else {
            this.isLoggedIn.set(true);

            return Promise.resolve();
        }
    }

    logout() {
        console.log(`User logged out.`)
        this.isLoggedIn.set(false);
    }
}
