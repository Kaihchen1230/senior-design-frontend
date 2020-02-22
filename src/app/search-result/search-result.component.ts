import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/search.service';
import { faSearch, faStar, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

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
  searchResults = [
    {
      repoName: 'react',
      discription: 'Mollit eiusmod sunt fugiat dolor non. Proident aute anim magna pariatur anim. Dolor aliquip magna ipsum enim laborum. Id sit irure enim incididunt non aliquip est voluptate voluptate nulla aute. Lorem proident consectetur adipisicing velit ad. Eiusmod officia voluptate minim amet ex culpa voluptate Lorem deserunt est mollit irure. Incididunt amet nulla consectetur culpa elit minim cupidatat ex commodo irure ullamco exercitation qui.',
      star: 12,
      lastUpdate: '2/1/2020',
      language: 'jax'
    },
    {
      repoName: 'angular',
      discription: 'Mollit eiusmod sunt fugiat dolor non. Proident aute anim magna pariatur anim. Dolor aliquip magna ipsum enim laborum. Id sit irure enim incididunt non aliquip est voluptate voluptate nulla aute. Lorem proident consectetur adipisicing velit ad. Eiusmod officia voluptate minim amet ex culpa voluptate Lorem deserunt est mollit irure. Incididunt amet nulla consectetur culpa elit minim cupidatat ex commodo irure ullamco exercitation qui.',
      star: 10,
      lastUpdate: '2/2/2020',
      language: 'js'
    },
    {
      repoName: 'vue',
      discription: 'Mollit eiusmod sunt fugiat dolor non. Proident aute anim magna pariatur anim. Dolor aliquip magna ipsum enim laborum. Id sit irure enim incididunt non aliquip est voluptate voluptate nulla aute. Lorem proident consectetur adipisicing velit ad. Eiusmod officia voluptate minim amet ex culpa voluptate Lorem deserunt est mollit irure. Incididunt amet nulla consectetur culpa elit minim cupidatat ex commodo irure ullamco exercitation qui.',
      star: 15,
      lastUpdate: '2/4/2020',
      language: 'javascript'
    }
  ]
  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.term = this.searchService.searchTerm;
    console.log('this is search result page: ', this.searchService.searchTerm)
  }

  randomNumIsEven(){
    let num: number =  Math.floor(Math.random() * 100);

    console.log('this is num: ', num)

    return num % 2 === 0;

  }

}
