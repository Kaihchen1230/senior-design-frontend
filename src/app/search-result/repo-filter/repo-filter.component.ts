import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {SearchResultService} from '../search-result.service';
import { Repo } from '../../shared/models/repo.model';
@Component({
  selector: 'app-repo-filter',
  templateUrl: './repo-filter.component.html',
  styleUrls: ['./repo-filter.component.css']
})
export class RepoFilterComponent implements OnInit {
  searchResults: Repo[] = [];
  repoCounter = {};
  @Output() selectrepo: EventEmitter<string> = new EventEmitter();
  @Input() repoSelected: string;
  @Input() filterClass: string;

  constructor(private searchResultService: SearchResultService) { }

  ngOnInit() {
    this.searchResults = this.searchResultService.getSearchResult();
    this.countrepo();
  }

  onrepoClick(selectedrepo: string) {
    this.selectrepo.emit(selectedrepo);
  }

  countrepo() {
    console.log(this.filterClass)
    this.searchResults.forEach((searchResult: Repo) => {
      const repo = searchResult[this.filterClass];
      if (this.repoCounter.hasOwnProperty(repo)) {
        this.repoCounter[repo] += 1;
      } else {
        this.repoCounter[repo] = 1;
      }
    });
  }
}
