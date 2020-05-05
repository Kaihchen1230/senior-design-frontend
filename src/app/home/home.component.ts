import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logoImagePath = 'assets/logo.png';
  @ViewChild('f', {static: false}) searchForm: NgForm;
  searchIcon = faSearch;
  constructor(private router: Router) { }

  ngOnInit() {}

  submitSearchTerm() {
    const searchTerm = this.searchForm.value.searchTerm;
    if (searchTerm) {
      this.router.navigate(['/search-result', searchTerm]);
    } else {
      alert('search term cannot be empty!');
    }
  }
}
