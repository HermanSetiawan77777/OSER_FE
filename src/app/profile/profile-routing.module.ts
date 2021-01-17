import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { ProfileComponent } from './profile.component';
import { OwneridProfileComponent } from '@app/profile/ownerid-profile.component';
import { ChangePasswordComponent } from '@app/profile/change-password.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: ProfileComponent },
      { path: 'profile/:ownerid', component: OwneridProfileComponent},
      { path: 'profile/changepassword/:id', component: ChangePasswordComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
