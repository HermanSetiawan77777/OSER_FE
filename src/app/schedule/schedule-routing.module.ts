import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleLayoutComponent } from './schedule-layout.component';
import { ScheduleListComponent } from './schedule-list.component';
import { ScheduleDetailComponent } from './schedule-detail.component';
import { PaymentComponent } from './payment.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleLayoutComponent,
    children: [
      { path: '', component: ScheduleListComponent },
      { path: 'schedule/detail/:_id', component: ScheduleDetailComponent },
      { path: 'schedule/paymentDetail/:_id', component: PaymentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleRoutingModule {}
