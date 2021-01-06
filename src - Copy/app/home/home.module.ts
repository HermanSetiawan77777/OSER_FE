import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from '../projects/users-routing.module';
import { TooltipModule } from 'ng2-tooltip-directive';
import { SharedModule } from '../shared/shared.module';
import { MyprojectComponent } from './myproject.component';
import { JwPaginationModule } from 'jw-angular-pagination';
import { MyservicesComponent } from './myservices.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    TooltipModule,
    SharedModule,
    JwPaginationModule,
  ],
  exports: [
    MyprojectComponent,
    MyservicesComponent
  ],
  declarations: [
    MyprojectComponent,
    MyservicesComponent,
  ]
})
export class HomeModule { }
