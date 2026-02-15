import { Routes } from '@angular/router';
import { PortfolioLandingComponent } from './pages/landing/portfolio-landing';

export const routes: Routes = [
  {
    path: '',
    component: PortfolioLandingComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
