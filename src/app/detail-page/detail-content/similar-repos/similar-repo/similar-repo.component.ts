import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faGitlab, faBitbucket } from '@fortawesome/free-brands-svg-icons';
import { RequestRepoService } from 'src/app/shared/request-repo.service';

@Component({
  selector: 'app-similar-repo',
  templateUrl: './similar-repo.component.html',
  styleUrls: ['./similar-repo.component.css']
})
export class SimilarRepoComponent implements OnInit {
  star = faStar;
  github = faGithub;
  gitlab = faGitlab;
  bitbucket = faBitbucket;
  platform = '';
  @Input() similarRepos: [];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.platform = params.platform;
        console.log('this is params: ', params);
      });
  }

  ClickSimilarRepo(repoName: string) {
    console.log('click');
    localStorage.setItem('repoName', repoName);
    console.log('this is localhost: ', localStorage);
    // this.router.navigate(['detail-page']);
  }

}
