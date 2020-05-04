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
  keywordCounter = {};
  @Output() selectKeyword: EventEmitter<string> = new EventEmitter();
  @Input() keywordSelected: string;
  @Input() filterClass: string;

  constructor(private searchResultService: SearchResultService) { }

  ngOnInit() {
    this.searchResults = this.searchResultService.getSearchResult();
    this.countKeyword();
  }

  onrepoClick(selectedrepo: string) {
    this.selectKeyword.emit(selectedrepo);
  }

  countKeyword() {
    console.log(this.filterClass);
    this.searchResults.forEach((searchResult: Repo) => {
      const repo = searchResult[this.filterClass];
      if (this.keywordCounter.hasOwnProperty(repo)) {
        this.keywordCounter[repo] += 1;
      } else {
        this.keywordCounter[repo] = 1;
      }
    });
  }
}
