import { Component, Signal } from '@angular/core';
import { Router, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { DataService } from './shared/data.service';
import { Theme } from './model';

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
    selectedTheme: Signal<Theme>;

    constructor(private authService: AuthService, private dataService: DataService, private router: Router) {
        this.isAuthenticated = authService.isLoggedIn;
        this.selectedTheme = dataService.getSelectedThemeSignal();

        this.applyTheme(this.selectedTheme());
    }

    onLogoutClick() {
        this.authService.logout();
        this.router.navigate(['/auth']);
    }

    onToggleThemeClick() {
        this.dataService.toggleSelectedTheme();
        this.applyTheme(this.selectedTheme());
    }

    private applyTheme(theme: Theme) {
        document.querySelector('html').dataset['bsTheme'] = theme;
    }
}
