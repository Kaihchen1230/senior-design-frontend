import { Component, OnInit } from '@angular/core';
import { faSearch, faStar} from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RequestRepoService } from '../shared/request-repo.service';
import {SearchResultService} from '../search-result/search-result.service';
import { Repo } from '../shared/models/repo.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})

export class SearchResultComponent implements OnInit {
  searchIcon = faSearch;
  starIcon = faStar;
  isFetching = false;
  searchResults: Repo[] = [];
  errorMsg = null;

  constructor(private requestRepoService: RequestRepoService,
              private searchResultService: SearchResultService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.isFetching = true;
          const searchTerm = params['search-term'];

          this.requestRepoService.fetchRepos(searchTerm).subscribe(_ => {
            this.isFetching = false;
            this.searchResults = this.searchResultService.getSearchResult();
            if (this.searchResults.length === 0) {
              this.errorMsg = 'No Project Found: ';
            }
          }, error => {
            console.log('Error Occur:', error);
            this.errorMsg = error.error.message;
          });
          console.log(this.searchResults);
      });
  }

  onHandleError() {
    this.router.navigate(['/']);
  }
}
