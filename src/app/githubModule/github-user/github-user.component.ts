import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit, OnDestroy {

  login;
  score;
  subscription;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this._route.params.subscribe( params => {
      //set values based on parameters sent from route
      this.login = params["login"];
      this.score = params["score"];
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
