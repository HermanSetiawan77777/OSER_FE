import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleLayoutComponent } from './schedule-layout.component';
import { ScheduleListComponent } from './schedule-list.component';
import { ScheduleDetailComponent } from './schedule-detail.component';
import { PaymentComponent } from './payment.component';
import { ScheduleListByOwnerComponent } from './schedule-list-by-owner.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ScheduleRoutingModule,
    TooltipModule,
    SharedModule,
  ],
  exports: [ScheduleListByOwnerComponent, ScheduleListComponent],
  declarations: [
    ScheduleLayoutComponent,
    ScheduleListComponent,
    ScheduleDetailComponent,
    PaymentComponent,
    ScheduleListByOwnerComponent,
  ],
})
export class ScheduleModule {}
