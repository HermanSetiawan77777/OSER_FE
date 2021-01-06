import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ng2-tooltip-directive';
import { SharedModule } from '../shared/shared.module';
import { JwPaginationModule } from 'jw-angular-pagination';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from '@app/profile/profile-routing.module';
import { LayoutComponent } from '@app/profile/layout.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    TooltipModule,
    SharedModule,
    JwPaginationModule,
  ],
  exports: [
    ProfileComponent,
  ],
  declarations: [
    LayoutComponent,
    ProfileComponent,
  ]
})
export class ProfileModule { }
