import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { PriciesComponent } from './components/pricies/pricies.component';
import { ProtectedComponent } from './components/protected/protected.component';

// Servicies
import { AuthGuardService } from './servicies/auth-guard.service';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'pricies', component: PriciesComponent },
    { path: 'protected',
        component: ProtectedComponent,
        canActivate: [ AuthGuardService ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
