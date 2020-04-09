import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { SearchService } from '../shared/search.service';
import { faSearch, faStar, faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { RequestRepoService } from '../shared/request-repo.service';
import { Repo } from '../shared/repo.model';
import { SingleRepo } from '../shared/single-repo.model';
import { OwnerInfo } from '../shared/owner-info.model';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {

  // term: string = '';
  // searchIcon = faSearch;
  // firstEnter = true;

  // isFetching = false;
  // repoInfo: SingleRepo;
  // ownerInfo: OwnerInfo;
  // commits: [];

  // constructor(private searchService: SearchService,
  //             private requestRepoService: RequestRepoService) { }

  ngOnInit() {
  //   this.term = this.searchService.searchTerm;
  //   this.isFetching = true;
  //   this.requestRepoService.fetchRepo().subscribe(response => {
  //     // console.log('this is response: ', response);

  //     this.repoInfo = {... response};
  //     this.ownerInfo = new OwnerInfo(response.ownerAvatarUrl, response.ownerName, response.ownerURL);
  //     this.commits = response.commits;
  //     // console.log('this is repo Info: ', this.repoInfo);
  //     this.isFetching = false;
  //   });

  }

}
