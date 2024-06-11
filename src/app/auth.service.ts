import { Injectable, WritableSignal, signal } from '@angular/core';
import { UserCredentials } from './model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    isLoggedIn: WritableSignal<boolean> = signal(true);

    constructor() { }

    login(userCredentials: UserCredentials) {
        console.log(`User ${userCredentials.email} logged in.`)
        this.isLoggedIn.set(true);
    }

    logout() {
        console.log(`User logged out.`)
        this.isLoggedIn.set(false);
    }
}
