import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { ListComponent } from './list.component';
import { AddEditComponent } from './add-edit.component';
import { DetailComponent } from './detail.component';
import { ProjectNegoComponent } from '@app/projects/project-nego.component';
import { TakeProjectsComponent } from '@app/projects/take-projects.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: ListComponent },
            { path: 'project/add', component: AddEditComponent },
            { path: 'project/edit/:id', component: AddEditComponent },
            { path: 'project/detail/:id', component: DetailComponent},
            { path: 'project/:id/nego', component: ProjectNegoComponent},
            { path: 'project/take-project/:id', component: TakeProjectsComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
