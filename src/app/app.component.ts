import { Component, Signal } from '@angular/core';
import { Router, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        RouterModule, 
        RouterOutlet, 
        RouterLinkActive
    ]
})
export class AppComponent {
    isAuthenticated: Signal<boolean>;

    constructor(private authService: AuthService, private router: Router) {
        this.isAuthenticated = authService.isLoggedIn;
    }

    onLogoutClick() {
        this.authService.logout();
        this.router.navigate(['/auth']);
    }
}
