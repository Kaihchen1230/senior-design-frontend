import { Component, OnInit, ViewChild } from '@angular/core';
import { faSearch, faStar, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from '../shared/search.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchIcon = faSearch;
  searchTerm = '';
  @ViewChild('f', {static: false}) searchForm: NgForm;

  constructor(private searchService: SearchService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {


        const paramsSearchTerm = params['search-term'];
        if (paramsSearchTerm) {
          localStorage.setItem('searchTerm', paramsSearchTerm);
        }

        this.searchTerm = localStorage.getItem('searchTerm');
      });
  }

  submitSearchTerm() {
    const currentSearchTerm = this.searchForm.value.searchTerm;
    console.log('this.searchForm: ', this.searchForm);
    if (currentSearchTerm) {
      // console.log('this is searchForm: ', this.searchForm);
      localStorage.setItem('searchTerm', currentSearchTerm);
      // console.log('searchTerm: ', searchTerm);
      // console.log('route: ', this.route);

      this.router.navigate(['/search-result', currentSearchTerm]);

    } else {
      this.searchForm.form.patchValue({
        searchTerm: currentSearchTerm
      });
      alert('search term cannot be empty!');
    }
  }

}
