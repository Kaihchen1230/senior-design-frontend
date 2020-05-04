import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {SearchResultService} from '../../search-result/search-result.service';
import { Repo } from '../../shared/models/repo.model';
@Component({
  selector: 'app-language-filter',
  templateUrl: './language-filter.component.html',
  styleUrls: ['./language-filter.component.css']
})
export class LanguageFilterComponent implements OnInit {
  searchResults: Repo[] = [];
  languageCounter = {};
  @Output() selectLanguage: EventEmitter<string> = new EventEmitter();
  @Input() languageSelected: string;

  constructor(private searchResultService: SearchResultService) { }

  ngOnInit() {
    this.searchResults = this.searchResultService.getSearchResult();
    this.countLanguage();
  }

  onLanguageClick(selectedLanguage: string) {
    this.selectLanguage.emit(selectedLanguage);
  }

  countLanguage() {
    this.searchResults.forEach((searchResult: Repo) => {
      const language = searchResult.language;
      if (this.languageCounter.hasOwnProperty(language)) {
        this.languageCounter[language] += 1;
      } else {
        this.languageCounter[language] = 1;
      }
    });
  }
}
