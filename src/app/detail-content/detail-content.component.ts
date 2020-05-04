import { Component, OnInit } from '@angular/core';
import { SingleRepo } from 'src/app/shared/models/single-repo.model';
import { OwnerInfo } from 'src/app/shared/models/owner-info.model';
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
  errorMes = null;
  isFetching = false;
  repoInfo: SingleRepo;
  ownerInfo: OwnerInfo;
  commits: [];
  repoName = '';
  constructor(private requestRepoService: RequestRepoService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['repo-name'];
    console.log('this.route: ', this.route);
    this.route.params
      .subscribe(
        (params: Params) => {
          const ownerNameAndRepoName = params['repo-name'];
          this.repoName = ownerNameAndRepoName;
          const platform = params.platform;
          this.isFetching = true;
          this.requestRepoService.fetchRepo(platform, ownerNameAndRepoName).subscribe(response => {
            this.repoInfo = {... response};
    
            const index = ownerNameAndRepoName.indexOf('/');
            const repoName = ownerNameAndRepoName.slice(0,index);
            this.repoInfo = {... this.repoInfo, repoName: repoName};
            console.log('this is repoInfo: ', this.repoInfo);

            this.ownerInfo = new OwnerInfo(response.ownerAvatarUrl, response.ownerName, response.ownerURL);
            this.commits = response.commits;
            this.isFetching = false;
          }, (errorResp) => {
            if (errorResp.error.message) {
              this.errorMes = errorResp.error.message;
            } else {
              this.errorMes = 'Unknown Error Occured....';
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
