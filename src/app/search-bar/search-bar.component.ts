import { Component, OnInit, ViewChild } from '@angular/core';
import { faSearch, faStar, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from '../shared/search.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchIcon = faSearch;
  searchTerm = localStorage.getItem('searchTerm');
  @ViewChild('f', {static: false}) searchForm: NgForm;

  constructor(private searchService: SearchService,
              private router: Router) { }

  ngOnInit() {}

  submitSearchTerm() {
    const searchTerm = this.searchForm.value.searchTerm;

    if (searchTerm) {
      // console.log('this is searchForm: ', this.searchForm);
      localStorage.setItem('searchTerm', searchTerm);
      console.log('searchTerm: ', searchTerm);

      this.router.navigate(['/search-result']);
    } else {
      alert('search term cannot be empty!');
    }
  }

}
