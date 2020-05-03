import { Component, OnInit } from '@angular/core';
import { SingleRepo } from 'src/app/shared/single-repo.model';
import { OwnerInfo } from 'src/app/shared/owner-info.model';
import { SearchService } from 'src/app/shared/search.service';
import { RequestRepoService } from 'src/app/shared/request-repo.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router, Params, NavigationEnd, RoutesRecognized } from '@angular/router';
import { filter, pairwise } from 'rxjs/operators';
import { Location } from '@angular/common';
@Component({
  selector: 'app-detail-content',
  templateUrl: './detail-content.component.html',
  styleUrls: ['./detail-content.component.css']
})
export class DetailContentComponent implements OnInit {

  term = '';
  searchIcon = faSearch;
  firstEnter = true;
  error = null;
  repoName = '';
  isFetching = false;
  repoInfo: SingleRepo;
  ownerInfo: OwnerInfo;
  commits: [];


  constructor(private searchService: SearchService,
              private requestRepoService: RequestRepoService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['repo-name'];
    // console.log('huhuh');
    this.route.params
      .subscribe(
        (params: Params) => {
          this.repoName = params['repo-name'];
          const platform = params.platform;
          this.isFetching = true;
          this.requestRepoService.fetchRepo(platform, this.repoName).subscribe(response => {
            this.repoInfo = {... response};
            this.ownerInfo = new OwnerInfo(response.ownerAvatarUrl, response.ownerName, response.ownerURL);
            this.commits = response.commits;
            this.isFetching = false;
          }, (error) => {
            if (error.error.message) {
              this.error = error.error.message;
            } else {
              this.error = 'Unknown Error Occured....';
            }
            this.isFetching = false;
          });
        }
      );




  }

  onHandleError() {
    this.location.back();
  }

}
