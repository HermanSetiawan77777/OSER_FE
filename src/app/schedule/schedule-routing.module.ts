import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleLayoutComponent } from './schedule-layout.component';
import { ScheduleListComponent } from './schedule-list.component';
import { ScheduleDetailComponent } from './schedule-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleLayoutComponent,
    children: [
      { path: '', component: ScheduleListComponent },
      { path: 'schedule/detail/:_id', component: ScheduleDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleRoutingModule {}
