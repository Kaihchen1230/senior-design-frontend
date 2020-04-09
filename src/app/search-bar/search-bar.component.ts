import { Component, OnInit } from '@angular/core';
import { faSearch, faStar, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from '../shared/search.service';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchIcon = faSearch;
  term = '';

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.term = this.searchService.searchTerm;
  }

}
