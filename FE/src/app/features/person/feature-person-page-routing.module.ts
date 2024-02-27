import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonComponent } from './create-person/create-person.component';
import { ListPersonComponent } from './list-person/list-person.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create',
        component: CreatePersonComponent,
      },
      {
        path: 'list',
        component: ListPersonComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturePersonPageRoutingModule {}
