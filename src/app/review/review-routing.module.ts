import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewLayoutComponent } from './review-layout.component';
import { ReviewComponent } from './review.component';

const routes: Routes = [
  {
    path: '',
    component: ReviewLayoutComponent,
    children: [{ path: '', component: ReviewComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewRoutingModule {}
