import { Component, OnInit } from '@angular/core';
import { faSearch, faStar} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Params } from '@angular/router';
import { RequestRepoService } from '../shared/request-repo.service';
import { SearchResultService } from '../search-result/search-result.service';
import { Repo } from '../shared/models/repo.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})

export class SearchResultComponent implements OnInit {
  searchIcon = faSearch;
  starIcon = faStar;
  searchResults: Repo[] = [];
  languageSelected = null;
  platformSelected = null;
  errorMsg = null;
  isFetching = false;

  constructor(private requestRepoService: RequestRepoService,
              private searchResultService: SearchResultService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.isFetching = true;
          const searchTerm = params['search-term'];

          this.requestRepoService.fetchRepos(searchTerm).subscribe(_ => {
            this.isFetching = false;
            this.searchResults = this.searchResultService.getSearchResult().slice();
            if (this.searchResults.length === 0) {
              this.errorMsg = 'No Project Related to ' + searchTerm + ' ......';
            } else {
              this.addPlatformUrl();
            }
          }, error => {
            this.errorMsg = error.error.message;
          });
      });
  }

  addPlatformUrl() {
    this.searchResults = this.searchResults.map((repo) => {
      if (repo.platform === 'github') {
        repo.logoUrl = '../../assets/github-icon.jpg';
      } else if (repo.platform === 'gitlab') {
        repo.logoUrl = '../../assets/gitlab-icon.jpg';
      } else {
        repo.logoUrl = '../../assets/bitbucket-icon.jpg';
      }
      return repo;
    });
  }

  selectPlatform(platformSelected: string) {
    if (this.platformSelected === platformSelected) {
      this.platformSelected = null;
    } else {
      this.platformSelected = platformSelected;
    }
  }

  selectLanguage(languageSelected: string) {
    if (this.languageSelected === languageSelected) {
      this.languageSelected = null;
    } else {
      this.languageSelected = languageSelected;
    }
  }
}
