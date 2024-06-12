import { Component, ViewChild, ViewContainerRef, WritableSignal, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { UserCredentials } from '../model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.css'
})
export class AuthComponent {
    errorMessage: WritableSignal<string> = signal('');
    @ViewChild('authForm') public authForm: NgForm;

    constructor(private authService: AuthService, private router: Router) {}

    onSubmit() {
        this.authService.login(this.authForm.value as UserCredentials).then(() => {
            this.errorMessage.set('');

            this.authForm.reset();

            this.router.navigate(['/']);
        }).catch((errorMessage) => {
            this.errorMessage.set(errorMessage);
        });
    }
}
