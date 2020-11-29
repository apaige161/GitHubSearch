import { NgModule }            from '@angular/core';
//import commonModule instead of browserModule, use common for feature modules
import { CommonModule }        from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { HttpClientModule }          from '@angular/common/http';

import { GithubComponent }   from './github/github.component';
import { GithubUserComponent }      from './github-user/github-user.component';
import { GitHubService }         from './github.service';

@NgModule({
    imports: [                                 
        CommonModule,        
        ReactiveFormsModule,        
        HttpClientModule,
        RouterModule     
    ],
    declarations: [
        GithubComponent, 
        GithubUserComponent
    ],
    exports: [
    ],
    providers: [
        GitHubService        
    ]
})
export class GitHubModule { 
}