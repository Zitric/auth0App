import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot,
         RouterStateSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( private auth: AuthService ) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {

    console.log('next -> ' + next);

    if ( this.auth.isAuthenticated() ) {
      console.log('paso por el guard');
      return true;
    } else {
      console.error('Bloqueado por el guard');
      return false;
    }
  }

}
