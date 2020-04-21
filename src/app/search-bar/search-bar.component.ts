import { Component, OnInit, ViewChild } from '@angular/core';
import { faSearch, faStar, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from '../shared/search.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
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
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {}

  submitSearchTerm() {
    const searchTerm = this.searchForm.value.searchTerm;

    if (searchTerm) {
      // console.log('this is searchForm: ', this.searchForm);
      localStorage.setItem('searchTerm', searchTerm);
      console.log('searchTerm: ', searchTerm);
      console.log('route: ', this.route);

      if (this.route.snapshot.url[0].path === 'search-result') {
        console.log('here')
        this.router.navigateByUrl("/refresh", { skipLocationChange: true }).then(() => {
          console.log(decodeURI(this.location.path()));
          this.router.navigate([decodeURI(this.location.path())]);
        });
      } else {
        this.router.navigate(['/search-result']);
      }

    } else {
      alert('search term cannot be empty!');
    }
  }

}
