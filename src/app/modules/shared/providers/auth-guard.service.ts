import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '@app/modules/authentication/providers';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authenticationService: AuthenticationService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;

        // logged in
        if (Object.keys(currentUser).length !== 0) {
            return true;
        }

        // not logged in
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });

        return false;
    }
}