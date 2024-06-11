import { Component, WritableSignal, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
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

    constructor(private authService: AuthService, private router: Router) {}

    onSubmit(form: NgForm) {
        this.authService.login(form.value as UserCredentials).then(() => {
            this.errorMessage.set('');

            form.reset();

            this.router.navigate(['/']);
        }).catch((errorMessage) => {
            this.errorMessage.set(errorMessage);
        });
    }
}
