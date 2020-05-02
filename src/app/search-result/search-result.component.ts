import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/search.service';
import { faSearch, faStar, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RequestRepoService } from '../shared/request-repo.service';
import { Repo } from '../shared/repo.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})

export class SearchResultComponent implements OnInit {
  searchTerm = '';
  searchIcon = faSearch;
  starIcon = faStar;
  languages = {};
  isFetching = false;
  searchResults: Repo[] = [];
  error = null;

  constructor(private searchService: SearchService,
              private requestRepoService: RequestRepoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.searchTerm = localStorage.getItem('searchTerm');
    this.route.params
      .subscribe(
        (params: Params) => {
          this.isFetching = true;
          this.error = null;
          const searchTerm = params['search-term'];

          this.requestRepoService.fetchRepos(searchTerm).subscribe(responses => {
            this.searchResults = [...responses];
            localStorage.setItem('searchResults', JSON.stringify(this.searchResults));

            if (responses.length === 0) {
              this.error = 'No Repos related to the keyword: ';
            }

            this.searchResults.forEach((searchResult: any) => {

              let language = searchResult.language;

              if (!language) {
                language = 'Unknow';
              }

              language = language.toLowerCase();

              if (language === 'javascript') {
                language = 'JavaScript';
              } else {
                language = language.charAt(0).toUpperCase() + language.slice(1);
              }

              if (this.languages.hasOwnProperty(language)) {
                this.languages[language] += 1;
              } else {
                this.languages[language] = 1;
              }
            });

            this.isFetching = false;
          }, error => {

            console.log('this is error message: ', error);
            this.error = error.error.message;

          });
          console.log(this.searchResults);
      });
  }

  goToDetailPage(repoName: string, platform: string) {
    this.searchService.repoName = repoName;
  }

  onHandleError() {
    this.router.navigate(['/']);
  }

}
