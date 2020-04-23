import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('widgetsContent', { static: false })  widgetsContent: ElementRef<any>;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.platform = params.platform;
        console.log('this is params: ', params);
        console.log('similarRepos: ', this.similarRepos);
      });
  }

  ClickSimilarRepo(repoName: string) {
    console.log('click');
    localStorage.setItem('repoName', repoName);
    console.log('this is localhost: ', localStorage);
    // this.router.navigate(['detail-page']);
  }

  scrollRight() {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  scrollLeft() {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }

}
