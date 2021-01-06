import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { Dashboard } from '@app/dashboard';
import { ProfileModule } from '@app/profile/profile.module';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const projectModule = () => import('./projects/users.module').then(x => x.UsersModule);
const servicesModule = () => import('./services/services.module').then(x => x.ServicesModule);
const scheduleModule = () => import('./schedule/schedule.module').then(x => x.ScheduleModule);
const requestpriceModule = () => import('./request-price/request-price.module').then(x => x.RequestPriceModule);
const profileModule = () => import('./profile/profile.module').then(x => ProfileModule);



const routes: Routes = [
    { path: '', component: Dashboard},
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    { path: 'project', loadChildren: projectModule, canActivate: [AuthGuard] },
    { path: 'service', loadChildren: servicesModule, canActivate: [AuthGuard] },
    { path: 'schedule', loadChildren: scheduleModule, canActivate: [AuthGuard] },
    { path: 'requestprice', loadChildren: requestpriceModule, canActivate: [AuthGuard]},
    { path: 'profile', loadChildren: profileModule, canActivate: [AuthGuard]},
    { path: 'account', loadChildren: accountModule },

    // otherwise redirect to home
/*
    { path: '**', redirectTo: '' }
*/
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
