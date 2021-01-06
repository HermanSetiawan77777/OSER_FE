import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleLayoutComponent } from './schedule-layout.component';
import { ScheduleListComponent } from './schedule-list.component';
import { ScheduleDetailComponent } from './schedule-detail.component';
import { ScheduleListByOwnerComponent } from './schedule-list-by-owner.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ScheduleRoutingModule,
  ],
  declarations: [
    ScheduleLayoutComponent,
    ScheduleListComponent,
    ScheduleDetailComponent,
    ScheduleListByOwnerComponent,
  ]
})
export class ScheduleModule { }
