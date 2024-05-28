import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    imports: [RouterModule, RouterOutlet, RouterLinkActive],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {}
