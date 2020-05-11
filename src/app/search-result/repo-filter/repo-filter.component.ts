import { Component, OnInit, Output, Input, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import {SearchResultService} from '../search-result.service';
import { Repo } from '../../shared/models/repo.model';
@Component({
  selector: 'app-repo-filter',
  templateUrl: './repo-filter.component.html',
  styleUrls: ['./repo-filter.component.css']
})
export class RepoFilterComponent implements OnInit, OnChanges {
  searchResults: Repo[] = [];
  keywordCounter = {};
  keywordSelected: string;
  @Output() selectKeyword: EventEmitter<string> = new EventEmitter();
  @Input() platformSelected: string;
  @Input() languageSelected: string;
  @Input() filterClass: string;

  constructor(private searchResultService: SearchResultService) { }

  ngOnInit() {
    this.searchResults = this.searchResultService.getSearchResult();
    this.countKeyword();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.filterClass === 'platform') {
      this.keywordSelected = this.platformSelected;
    } else {
      this.keywordSelected = this.languageSelected;
    }
  }

  onrepoClick(selectedrepo: string) {
    this.selectKeyword.emit(selectedrepo);
  }

  countKeyword() {
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
