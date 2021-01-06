import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ServicesRoutingModule } from '../services/services-routing.module';
import { TooltipModule } from 'ng2-tooltip-directive';
import { ServicesListComponent } from '../services/services-list.component';
import { TruncatePipe } from './truncate.pipe';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ServicesRoutingModule,
    TooltipModule,
  ],
  exports: [
    TruncatePipe
  ],
  declarations: [
    TruncatePipe,
  ]
})
export class SharedModule { }
