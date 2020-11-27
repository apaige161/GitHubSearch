import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface GitHubUser {
  html_url: string;
  avatar_url: string;
  login: string;
  score: string;
  id: number
  items: any;
}

//allows this service to be injected into a component
@Injectable()
export class GitHubService {

  constructor( private _http: HttpClient) {

   }

   //get results from a search input
   getGitHubData(_searchTerm):Observable<GitHubUser>{
     return this._http.get<GitHubUser>("https://api.github.com/search/users?q="+_searchTerm);
   }
}
