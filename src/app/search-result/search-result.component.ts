import { Component, OnInit } from '@angular/core';
import { faSearch, faStar} from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RequestRepoService } from '../shared/request-repo.service';
import { Repo } from '../shared/repo.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})

export class SearchResultComponent implements OnInit {
  searchIcon = faSearch;
  starIcon = faStar;
  languageCounter = {};
  isFetching = false;
  searchResults: Repo[] = [];
  errorMsg = null;

  constructor(private requestRepoService: RequestRepoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.isFetching = true;
          const searchTerm = params['search-term'];

          this.requestRepoService.fetchRepos(searchTerm).subscribe(responses => {
            this.isFetching = false;
            this.searchResults = [...responses];
            localStorage.setItem('searchResults', JSON.stringify(this.searchResults));

            if (responses.length === 0) {
              this.errorMsg = 'No Project Found: ';
            }
            else
              this.countLanguage();      
          }, error => {
            console.log('Error Occur:', error);
            this.errorMsg = error.error.message;
          });
          console.log(this.searchResults);
      });
  }
  
  countLanguage(){
    this.searchResults.forEach((searchResult: Repo) => {
      let language = searchResult.language;
      
      if (!language) 
        language = 'Unknow';  
      
      if (this.languageCounter.hasOwnProperty(language)) {
        this.languageCounter[language] += 1;
      } else {
        this.languageCounter[language] = 1;
      }
    });
  }

  onHandleError() {
    this.router.navigate(['/']);
  }
}
