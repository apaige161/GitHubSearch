import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { GithubUserComponent } from './github-user/github-user.component';
import { AuthGuard } from '../loginModule/auth-guard.service';

//reduced size of routing file for easier maintainance
export const GitHubRouting = RouterModule.forChild([
  {path: 'GitHub', component: GithubComponent, canActivate: [AuthGuard]},
  //takes in params into the path
  {path: 'GitHub/user/:login/:score', component: GithubUserComponent, canActivate: [AuthGuard]},
]);