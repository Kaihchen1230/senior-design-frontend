import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/search.service';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchKeyWord: string = '';
  searchIcon = faSearch;
  constructor(private searchService: SearchService,
              private router: Router) { }

  ngOnInit() {
  }

  submitSearchTerm(){

    if(this.searchKeyWord){
      console.log('this is the searchKeyWord: ', this.searchKeyWord);
      this.searchService.changeSearchTerm(this.searchKeyWord);

      this.router.navigate(['/search-result']);
    }else{
      alert('search term cannot be empty!');
    }


  }
}
