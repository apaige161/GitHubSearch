import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { LoginModule } from './loginModule/login.module';
import { GitHubModule } from './githubModule/github.module';

import { routing } from './app.routing';
import { GitHubRouting } from './githubModule/githubModule.routing'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,

  ],
  imports: [
    BrowserModule,
    LoginModule,
    GitHubModule,
    //GitHubRouting has to be imported before routing
    GitHubRouting,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
