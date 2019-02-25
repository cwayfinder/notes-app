import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Auth} from 'aws-amplify';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {}

    async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        try {
            await Auth.currentSession();
            return true;
        } catch (e) {
            return this.router.parseUrl('/auth');
        }
    }
}
