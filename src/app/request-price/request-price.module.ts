import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RequestPriceRoutingModule } from './request-price-routing.module';
import { TooltipModule } from 'ng2-tooltip-directive';
import { SharedModule } from '../shared/shared.module';
import { JwPaginationModule } from 'jw-angular-pagination';
import { RequestPriceComponent } from './request-price.component';
import { LayoutComponent } from './layout.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RequestPriceRoutingModule,
    TooltipModule,
    SharedModule,
    JwPaginationModule,
  ],
  exports: [
    RequestPriceComponent,
  ],
  declarations: [
    LayoutComponent,
    RequestPriceComponent,
  ]
})
export class RequestPriceModule { }
