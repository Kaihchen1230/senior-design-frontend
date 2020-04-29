import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchService } from '../shared/search.service';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { RequestRepoService } from '../shared/request-repo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logoImagePath: any = 'assets/logo.png';
  @ViewChild('f', {static: false}) searchForm: NgForm;
  searchIcon = faSearch;
  constructor(private searchService: SearchService,
              private router: Router) { }

  ngOnInit() {}

  submitSearchTerm() {
    const searchTerm = this.searchForm.value.searchTerm;
    if (searchTerm) {
      console.log('this is searchForm: ', searchTerm);
      this.searchService.changeSearchTerm(searchTerm);
      this.searchService.saveSearchTerm(searchTerm);

      // this.router.navigate(['/search-result'], { queryParams: { 'search-term': searchTerm } });
      this.router.navigate(['/search-result', searchTerm]);
    } else {
      alert('search term cannot be empty!');
    }


  }
}
