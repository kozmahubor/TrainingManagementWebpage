import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { ListWorkoutComponent } from './list-workout/list-workout.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create',
        component: CreateWorkoutComponent,
      },
      {
        path: 'list',
        component: ListWorkoutComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureWorkoutPageRoutingModule {}
