import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardUserService } from './core/services';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/feature-home-page.module').then(
        (feature) => feature.FeatureHomePageModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/feature-auth-page.module').then(
        (feature) => feature.FeatureAuthPageModule
      ),
  },
  {
    path: 'person',
    loadChildren: () =>
      import('./features/person/feature-person-page.module').then(
        (feature) => feature.FeaturePersonPageModule
      ),
  },
  {
    path: 'workout',
    canActivate: [GuardUserService],
    loadChildren: () =>
      import('./features/workout/feature-workout-page.module').then(
        (feature) => feature.FeatureWorkoutPageModule
      ),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./features/error-page/feature-error-page.module').then(
        (feature) => feature.FeatureErrorPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
