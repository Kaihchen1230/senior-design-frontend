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
  incresing = faCaretUp;
  decresing = faCaretDown;
  languagess = [
    'C++',
    'Java',
    'Python',
    'JavaScript',
    'PHP',
    'C#',
    'C',
    'R',
  ];
  languages = {};
  isFetching = false;
  searchResults: Repo[] = [];
  noRepo = false;
  error = null;

  constructor(private searchService: SearchService,
              private requestRepoService: RequestRepoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // const searchTerm = this.searchService.searchTerm;


    this.searchTerm = localStorage.getItem('searchTerm');
    console.log('is fetching');
    this.route.params
      .subscribe(
        (params: Params) => {
          this.isFetching = true;
          this.error = null;
          const searchTerm = params['search-term'];
          this.searchTerm = searchTerm;
          console.log('this is search term from params: ', searchTerm);

          this.requestRepoService.fetchRepos(searchTerm).subscribe(responses => {
            this.searchResults = [...responses];
            console.log('this is searchResults: ', this.searchResults);
            localStorage.setItem('searchResults', JSON.stringify(this.searchResults));

            if (responses.length === 0) {
              this.error = 'No Repos related to the keyword: ';
            }

            // const languages = {};
            this.searchResults.forEach((searchResult: any) => {

              let language = searchResult.language;
              // console.log('this is language: ', language);
              if (!language) {
                language = 'Unknow';
              }
              // const tmpLanguage = language.toLowerCase();
              language = language.toLowerCase();

              if (language === 'javascript') {
                language = 'JavaScript';
              } else {
                language = language.charAt(0).toUpperCase() + language.slice(1);
              }

              if (this.languages.hasOwnProperty(language)) {
                // console.log('tmpLanguage in if : ', tmpLanguage);
                this.languages[language] += 1;
              } else {
                // console.log('tmpLanguage in else: ', tmpLanguage);
                this.languages[language] = 1;
              }
            });

            // this.languages = {... languages};
            // console.log(' Object.keys(languages): ',  Object.keys(languages));

            // console.log('this.languages: ', this.languages);

            this.isFetching = false;
          }, error => {
            console.log('this is error message: ', error);

          });
          console.log(this.searchResults);
          if (this.searchResults.length === 0) {
            this.noRepo = true;
          }
      });
  }

  randomNumIsEven(){
    const num: number =  Math.floor(Math.random() * 100);
    // console.log('this is num: ', num);
    return num % 2 === 0;
  }

  goToDetailPage(repoName: string, platform: string) {

    this.searchService.repoName = repoName;
    // localStorage.setItem('repoName', repoName);
    // localStorage.setItem('platform', platform);
    // this.router.navigate(['/detail-page']);
  }

  onHandleError() {
    this.noRepo = false;
    this.router.navigate(['/']);
  }

}
