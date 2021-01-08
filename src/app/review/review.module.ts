import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReviewRoutingModule } from './review-routing.module';
import { ReviewLayoutComponent } from './review-layout.component';
import { ReviewComponent } from './review.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReviewRoutingModule,
    TooltipModule,
    SharedModule,
  ],
  exports: [ReviewComponent],
  declarations: [ReviewLayoutComponent, ReviewComponent],
})
export class ReviewModule {}
