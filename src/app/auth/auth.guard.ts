import { inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { CanActivateFn, Router } from "@angular/router";

export function authGuardFn(redirectToUrl: string): CanActivateFn {
    return () => {
        const authService = inject(AuthService);
        const router = inject(Router);
        const redirectToUrlTree = router.createUrlTree([redirectToUrl]);

        return authService.isLoggedIn() || redirectToUrlTree;
    }
}