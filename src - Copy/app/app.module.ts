import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { UsersModule } from '@app/projects/users.module';
import { ServicesModule } from '@app/services/services.module';
import { TooltipModule } from 'ng2-tooltip-directive';
import { Dashboard } from '@app/dashboard';
import { HomeModule } from '@app/home/home.module';
import { RequestPriceModule } from '@app/request-price/request-price.module';
import { ProfileModule } from '@app/profile/profile.module';
import { ModalModule } from 'ng2-modal-module';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    UsersModule,
    ServicesModule,
    TooltipModule,
    HomeModule,
    RequestPriceModule,
    ProfileModule,
    ModalModule,
  ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        Dashboard,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };
