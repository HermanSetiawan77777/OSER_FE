import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesLayoutComponent } from './services-layout.component';
import { ServicesListComponent } from './services-list.component';
import { ServicesAddEditComponent } from './services-add-edit.component';
import { ServicesDetailComponent } from './services.detail.component';
import { TakeServicesComponent } from '@app/services/take-services.component';



const routes: Routes = [
  {
    path: '', component: ServicesLayoutComponent,
    children: [
      { path: '', component: ServicesListComponent },
      { path: 'services/add', component: ServicesAddEditComponent },
      { path: 'services/edit/:_id', component: ServicesAddEditComponent },
      { path: 'services/detail/:_id', component: ServicesDetailComponent},
      { path: 'service/services/detail/services/take-services/:_id', component: TakeServicesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
