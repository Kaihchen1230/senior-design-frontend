import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {SearchResultService} from '../../search-result/search-result.service';
import { Repo } from '../../shared/models/repo.model';

@Component({
  selector: 'app-platform-filter',
  templateUrl: './platform-filter.component.html',
  styleUrls: ['./platform-filter.component.css']
})
export class PlatformFilterComponent implements OnInit {

  searchResults: Repo[] = [];
  platformCounter = {};
  @Output() platformSelected: EventEmitter<string> = new EventEmitter();
  @Input() selectedPlatform: string;

  constructor(private searchResultService: SearchResultService) { }

  ngOnInit() {
    this.searchResults = this.searchResultService.getSearchResult();
    this.countPlatform();
  }

  onLanguageClick(selectedPlatform: string) {
    this.platformSelected.emit(selectedPlatform);
  }

  countPlatform() {
    this.searchResults.forEach((searchResult: Repo) => {
      const platform = searchResult.platform;
      if (this.platformCounter.hasOwnProperty(platform)) {
        this.platformCounter[platform] += 1;
      } else {
        this.platformCounter[platform] = 1;
      }
    });
  }
}
