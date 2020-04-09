import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/search.service';
import { faSearch, faStar, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { RequestRepoService } from '../shared/request-repo.service';
import { Repo } from '../shared/repo.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  term = '';
  searchIcon = faSearch;
  starIcon = faStar;
  incresing = faCaretUp;
  decresing = faCaretDown;

  languages = [
    'C++',
    'Java',
    'Python',
    'JavaScript',
    'PHP',
    'C#',
    'C',
    'R',
  ];
  isFetching = false;
  searchResults: Repo[] = [];

  constructor(private searchService: SearchService,
              private requestRepoService: RequestRepoService,
              private router: Router) { }

  ngOnInit() {
    // const searchTerm = this.searchService.searchTerm;
    this.isFetching = true;
    const searchTerm = localStorage.getItem('searchTerm');
    this.requestRepoService.fetchRepos(searchTerm).subscribe(responses => {
      this.searchResults = [...responses];
      console.log(this.searchResults);
      localStorage.setItem('searchResults', JSON.stringify(this.searchResults));
      this.isFetching = false;
    });

  }

  randomNumIsEven(){
    const num: number =  Math.floor(Math.random() * 100);
    // console.log('this is num: ', num);
    return num % 2 === 0;
  }

  goToDetailPage(repoName: string, platform: string) {

    this.searchService.repoName = repoName;
    localStorage.setItem('repoName', repoName);
    localStorage.setItem('platform', platform);
    // this.router.navigate(['/detail-page']);
  }

}
