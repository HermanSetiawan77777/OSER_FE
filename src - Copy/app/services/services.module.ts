import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ServicesLayoutComponent } from './services-layout.component';
import { ServicesListComponent } from './services-list.component';
import { ServicesAddEditComponent } from './services-add-edit.component';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesDetailComponent } from './services.detail.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { TruncatePipe } from '@app/shared/truncate.pipe';
import { SharedModule } from '@app/shared/shared.module';
import { TakeServicesComponent } from '@app/services/take-services.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ServicesRoutingModule,
    TooltipModule,
    SharedModule,
  ],
  exports: [
    ServicesListComponent
  ],
  declarations: [
    ServicesLayoutComponent,
    ServicesListComponent,
    ServicesAddEditComponent,
    ServicesDetailComponent,
    TakeServicesComponent,
  ]
})
export class ServicesModule { }
