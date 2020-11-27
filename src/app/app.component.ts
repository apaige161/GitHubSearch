import { Component } from '@angular/core';
import { GitHubService } from './github.service';

import { filter,debounceTime,distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitHubService]
})
export class AppComponent {
  title = 'github';

  searchControl = new FormControl(); 
  isLoading = true;
  users = [];

  //injects github service to handle get requests
  constructor( private _githubService: GitHubService) {}

  ngOnInit() {
    //send request when the input value changes
    this.searchControl.valueChanges
        //only when the input is longer than 3 char
        .pipe(filter(text => text.length >= 3), debounceTime(400),distinctUntilChanged())
        //call back function to get data from github
        .subscribe(value => {
          this.isLoading = true; 
          //gets json from api through the service
          this._githubService.getGitHubData(value)
                .subscribe(data => {
                  this.isLoading = false;
                  //puts the returned github user data into an array named users
                  this.users = data.items;
                  console.log(this.users);
          });  
    });
  }

  
}
