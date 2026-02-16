import { Routes } from '@angular/router';
import { PortfolioLandingComponent } from './pages/landing/portfolio-landing';

export const routes: Routes = [
  {
    path: '',
    component: PortfolioLandingComponent,
  },
  {
    path: 'demo/ag-grid',
    loadComponent: () => import('./pages/demo/ag-grid-demo').then((m) => m.AgGridDemoComponent),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
