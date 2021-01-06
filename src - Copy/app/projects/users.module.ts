import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';
import { DetailComponent } from './detail.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { TruncatePipe } from '@app/shared/truncate.pipe';
import { SharedModule } from '@app/shared/shared.module';
import { JwPaginationModule } from 'jw-angular-pagination';
import { ProjectNegoComponent } from '@app/projects/project-nego.component';
import { TakeProjectsComponent } from '@app/projects/take-projects.component';

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
    ListComponent
  ],
  declarations: [
    LayoutComponent,
    ListComponent,
    AddEditComponent,
    DetailComponent,
    ProjectNegoComponent,
    TakeProjectsComponent,
  ]
})
export class UsersModule { }
