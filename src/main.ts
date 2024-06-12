import { NoPreloading, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appRoutes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { CalculationService } from './app/diagram/calculation.service';
import { DataService } from './app/shared/data.service';

import { enableProdMode, ɵprovideZonelessChangeDetection } from '@angular/core';
import { environment } from './environments/environment';
import { provideAnimations } from '@angular/platform-browser/animations';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(
    AppComponent, {
        providers: [
            importProvidersFrom(
                RouterModule.forRoot(
                    appRoutes, 
                    {
                        preloadingStrategy: NoPreloading
                    }
                )
            ),
            provideAnimations(),
            CalculationService,
            DataService,
            ɵprovideZonelessChangeDetection()
        ]
    }
);
