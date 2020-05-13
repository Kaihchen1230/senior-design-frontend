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
  notValid = false;

  constructor(private router: Router) { }
  ngOnInit() {}

  submitSearchTerm() {
    this.notValid = false;
    const searchTerm = this.searchForm.value.searchTerm;
    this.checkBlankInput(searchTerm);
    if (!this.notValid) {
      this.router.navigate(['/search-result', searchTerm]);
    } else {
      // alert('search term cannot be empty!');
    }
  }

  checkBlankInput(searchTerm: string) {
    if (searchTerm.trim().length === 0) {
      this.notValid = true;
    }
  }
}
