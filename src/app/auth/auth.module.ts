import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ForgotComponent } from './forgot/forgot.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    NewUserComponent,
    LoginComponent,
    LogoutComponent,
    ForgotComponent,
    PageNotFoundComponent,
    DashboardComponent],

  imports: [
    CommonModule
  ]
})
export class AuthModule { }
