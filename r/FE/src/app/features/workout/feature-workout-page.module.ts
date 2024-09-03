import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateWorkoutComponent } from './create-workout/create-workout.component';
import { ListWorkoutComponent } from './list-workout/list-workout.component';
import { FeatureWorkoutPageRoutingModule } from './feature-workout-page-routing.module';

@NgModule({
  declarations: [CreateWorkoutComponent, ListWorkoutComponent],
  exports: [FormsModule, SharedModule, FeatureWorkoutPageRoutingModule],
})
export class FeatureWorkoutPageModule {}
