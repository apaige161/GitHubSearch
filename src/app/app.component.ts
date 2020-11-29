import { Component } from '@angular/core';
import { GitHubService } from './githubModule/github.service';

import { filter,debounceTime,distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitHubService]
})
export class AppComponent {

  

  
}
