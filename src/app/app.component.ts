import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { DiagramComponent } from "./diagram/diagram.component";

@Component({
    standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterModule, RouterOutlet, RouterLinkActive, DiagramComponent]
})
export class AppComponent {}
