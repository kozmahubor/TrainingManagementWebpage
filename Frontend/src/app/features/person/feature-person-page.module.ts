import { NgModule } from '@angular/core';
import { CreatePersonComponent } from './create-person/create-person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { FeaturePersonPageRoutingModule } from './feature-person-page-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormModule } from '../../shared/components/forms/form.module';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [CreatePersonComponent, ListPersonComponent],
  imports: [
    SharedModule,
    FormModule,
    LayoutModule,
    FeaturePersonPageRoutingModule,
  ],
})
export class FeaturePersonPageModule {}
