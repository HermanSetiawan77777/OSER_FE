import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestPriceRoutingModule } from './request-price-routing.module';
import { TooltipModule } from 'ng2-tooltip-directive';
import { SharedModule } from '../shared/shared.module';
import { JwPaginationModule } from 'jw-angular-pagination';
import { RequestPriceComponent } from './request-price.component';
import { LayoutComponent } from './layout.component';
import { DetailRequestComponent } from './detail-request.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RequestPriceRoutingModule,
    TooltipModule,
    SharedModule,
    JwPaginationModule,
    FormsModule,
  ],
  exports: [RequestPriceComponent, DetailRequestComponent],
  declarations: [
    LayoutComponent,
    RequestPriceComponent,
    DetailRequestComponent,
  ],
})
export class RequestPriceModule {}
