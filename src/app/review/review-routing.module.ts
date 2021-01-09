import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewLayoutComponent } from './review-layout.component';
import { ReviewComponent } from './review.component';
import { ListNotifComponent } from './list-notif-component';
import { ListComponent } from './list-component';

const routes: Routes = [
  {
    path: '',
    component: ReviewLayoutComponent,
    children: [
      { path: '', component: ReviewComponent },
      { path: 'listNotif', component: ListNotifComponent },
      { path: 'list', component: ListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewRoutingModule {}
