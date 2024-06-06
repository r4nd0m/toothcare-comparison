import { NoPreloading, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appRoutes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { CalculationService } from './app/calculation.service';
import { DataService } from './app/data.service';

import { enableProdMode, ɵprovideZonelessChangeDetection } from '@angular/core';
import { environment } from './environments/environment';

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
            CalculationService,
            DataService,
            ɵprovideZonelessChangeDetection()
        ]
    }
);
