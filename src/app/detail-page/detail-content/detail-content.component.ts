import { Component, OnInit } from '@angular/core';
import { SingleRepo } from 'src/app/shared/single-repo.model';
import { OwnerInfo } from 'src/app/shared/owner-info.model';
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

  isFetching = false;
  repoInfo: SingleRepo;
  ownerInfo: OwnerInfo;
  commits: [];


  constructor(private requestRepoService: RequestRepoService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['repo-name'];
    // console.log('huhuh');
    this.route.params
      .subscribe(
        (params: Params) => {
          // console.log('this is params: ', params['repo-name']);
          const repoName = params['repo-name'];
          const platform = params.platform;
          // console.log('this is repoName: ', repoName, 'and this is platform: ', platform);
          this.isFetching = true;
          this.requestRepoService.fetchRepo(platform, repoName).subscribe(response => {
            console.log('this is response: ', response);


            this.repoInfo = {... response};
            this.ownerInfo = new OwnerInfo(response.ownerAvatarUrl, response.ownerName, response.ownerURL);
            this.commits = response.commits;
            // console.log('this is repo Info: ', this.repoInfo);
            this.isFetching = false;
          }, (error) => {
            console.log('this is error message: ', error);

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
    console.log('handle error clicked');
    // const lastSuccessfulNavigation = this.router.getLastSuccessfulNavigation();
    // const previousNavigation = lastSuccessfulNavigation.previousNavigation;
    // this.router.navigateByUrl(previousNavigation);
    console.log('this is route: ', this.location);
    this.location.back();
    // console.log('this is router: ', this.router.events);


  }

}
