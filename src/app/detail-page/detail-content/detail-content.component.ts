import { Component, OnInit } from '@angular/core';
import { SingleRepo } from 'src/app/shared/single-repo.model';
import { OwnerInfo } from 'src/app/shared/owner-info.model';
import { SearchService } from 'src/app/shared/search.service';
import { RequestRepoService } from 'src/app/shared/request-repo.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-detail-content',
  templateUrl: './detail-content.component.html',
  styleUrls: ['./detail-content.component.css']
})
export class DetailContentComponent implements OnInit {

  term: string = '';
  searchIcon = faSearch;
  firstEnter = true;

  isFetching = false;
  repoInfo: SingleRepo;
  ownerInfo: OwnerInfo;
  commits: [];

  constructor(private searchService: SearchService,
              private requestRepoService: RequestRepoService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['repo-name'];
    this.route.params
      .subscribe(
        (params: Params) => {
          console.log('this is params: ', params['repo-name']);
          const repoName = params['repo-name'];
          this.isFetching = true;
          this.requestRepoService.fetchRepo(repoName).subscribe(response => {
            // console.log('this is response: ', response);

            this.repoInfo = {... response};
            this.ownerInfo = new OwnerInfo(response.ownerAvatarUrl, response.ownerName, response.ownerURL);
            this.commits = response.commits;
            // console.log('this is repo Info: ', this.repoInfo);
            this.isFetching = false;
          });
        }
      );


  }

}
