import { Component } from '@angular/core';
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
    constructor(private authService: AuthService, private router: Router) {}

    onSubmit(form: NgForm) {
        console.log(form);

        this.authService.login(form.value as UserCredentials);

        form.reset();

        this.router.navigate(['/']);
    }

}
