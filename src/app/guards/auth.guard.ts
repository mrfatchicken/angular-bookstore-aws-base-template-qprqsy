import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivateChild,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivateChild {
  constructor(private auth: AuthenticationService, private router: Router) {}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    // return this.auth.isAuthenticated$.pipe(
    //   map((isAuthenticated) => {
    //     if (isAuthenticated) {
    //       console.log('Guard: true');
    //       return true;
    //     } else {
    //       console.log('Guard: false');
    //       return this.router.parseUrl('/log-in');
    //     }
    //   })
    // );
    console.log(3);
    return this.auth.currentUser().then((user) => {
      console.log(2, user);
      if (user) {
        return true;
      } else {
        return this.router.parseUrl('/log-in');
      }
    });
  }
}
