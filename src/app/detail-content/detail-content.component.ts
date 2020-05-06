import { Component, OnInit } from '@angular/core';
import { Commit } from 'src/app/shared/models/commit-model';
import { OwnerInfo } from 'src/app/shared/models/owner-info.model';
import { RequestRepoService } from 'src/app/shared/request-repo.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Params } from '@angular/router';
import { DetailContentService, TrendingGraphInfo } from './detail-content-service';
import { RepoOverview } from '../shared/models/repo-overview.model';
import { RepoInfo } from '../shared/models/repo-info.model';
@Component({
  selector: 'app-detail-content',
  templateUrl: './detail-content.component.html',
  styleUrls: ['./detail-content.component.css']
})
export class DetailContentComponent implements OnInit {

  searchIcon = faSearch;
  firstEnter = true;
  errorMes = null;
  isFetching = false;
  repoOverview: RepoOverview;
  ownerInfo: OwnerInfo;
  repoInfo: RepoInfo;
  commits: Commit[];
  repoName = '';
  trendingGraphInfo: TrendingGraphInfo;

  constructor(private requestRepoService: RequestRepoService,
              private route: ActivatedRoute,
              private detailContentService: DetailContentService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          const ownerNameAndRepoName = params['repo-name'];
          this.repoName = ownerNameAndRepoName;
          const platform = params.platform;
          this.isFetching = true;
          this.requestRepoService.fetchRepo(platform, ownerNameAndRepoName).subscribe(_ => {
            this.repoOverview = this.detailContentService.repoOverview;
            this.ownerInfo = this.detailContentService.ownerInfo;
            this.repoInfo = this.detailContentService.repoInfo;
            this.commits = this.detailContentService.commits;
            this.trendingGraphInfo = this.detailContentService.trendingGraphInfo;
            this.isFetching = false;

          }, (errorResp) => {
            console.log('this is errorResp: ', errorResp);
            if (errorResp.error.error.message) {
              this.errorMes = errorResp.error.message;
            } else {
              this.errorMes = 'Unknown Error Occured ....';
            }
            this.isFetching = false;
          });
        }
      );
  }

}
