import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-similar-repos',
  templateUrl: './similar-repos.component.html',
  styleUrls: ['./similar-repos.component.css']
})
export class SimilarReposComponent implements OnInit {

  similarRepos: [];

  constructor() { }

  ngOnInit() {

    const repoName = localStorage.getItem('repoName');
    this.similarRepos = JSON.parse(localStorage.getItem('searchResults'));

    this.similarRepos.forEach((repo, index) => {
      if (repo.repoName === repoName) {
        this.similarRepos.splice(index, 1);
      }
    });
    console.log('this is similarRepos: ', this.similarRepos);
  }

}
