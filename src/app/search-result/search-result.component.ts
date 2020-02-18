import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  term = '';

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.term = this.searchService.searchTerm;
    console.log('this is search result page: ', this.searchService.searchTerm)
  }

}
