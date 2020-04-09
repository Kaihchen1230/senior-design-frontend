import { Component, OnInit } from '@angular/core';
import { faSearch, faStar, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from 'src/app/shared/search.service';
import { Repo } from 'src/app/shared/repo.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RequestRepoService } from 'src/app/shared/request-repo.service';

@Component({
  selector: 'app-search-result-content',
  templateUrl: './search-result-content.component.html',
  styleUrls: ['./search-result-content.component.css']
})
export class SearchResultContentComponent implements OnInit {

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
              private router: Router,
              private route: ActivatedRoute) {
                console.log('jijijiji')
               }

  ngOnInit() {
    // const searchTerm = this.searchService.searchTerm;

    // const searchTerm = localStorage.getItem('searchTerm');
    const id = this.route.snapshot.params['isearch-term'];
    console.log('id: ', id);
    this.route.params
      .subscribe((params: Params) => {

        console.log('this is Params: ', params);
        this.isFetching = true;
      });
    // this.requestRepoService.fetchRepos(searchTerm).subscribe(responses => {
    //   this.searchResults = [...responses];
    //   console.log(this.searchResults);
    //   localStorage.setItem('searchResults', JSON.stringify(this.searchResults));
    //   this.isFetching = false;
    // });

  }

  randomNumIsEven() {
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
