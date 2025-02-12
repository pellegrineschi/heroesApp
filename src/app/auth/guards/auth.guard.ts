import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  CanMatchFn,
  Route,
  Router,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { authService } from '../services/auth.service';
import { inject } from '@angular/core';

const checkAuthStatus = (): Observable<boolean> => {
  const authServiceInstance: authService = inject(authService);
  const router: Router = inject(Router);

  return authServiceInstance.checkAuthentication().pipe(
    tap((isAuthenticated) => console.log('Authenticated: ', isAuthenticated)),
    tap((isAuthenticated) => {
      if (!isAuthenticated) {
        router.navigate(['/auth/login']);
      }
    })
  );
};

// Exporta solo una vez canActivateGuard
export const canActivateGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return checkAuthStatus();
};

export const canMatchGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  return checkAuthStatus();
};
