import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReviewRoutingModule } from './review-routing.module';
import { ReviewLayoutComponent } from './review-layout.component';
import { ReviewComponent } from './review.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { SharedModule } from '@app/shared/shared.module';
import { ListNotifComponent } from './list-notif-component';
import { ListComponent } from './list-component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReviewRoutingModule,
    TooltipModule,
    SharedModule,
  ],
  exports: [ListNotifComponent, ListComponent],
  declarations: [
    ReviewLayoutComponent,
    ReviewComponent,
    ListNotifComponent,
    ListComponent,
  ],
})
export class ReviewModule {}
