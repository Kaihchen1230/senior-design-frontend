import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Repo } from 'src/app/shared/models/repo.model';

@Component({
  selector: 'app-similar-repos',
  templateUrl: './similar-repos.component.html',
  styleUrls: ['./similar-repos.component.css']
})



export class SimilarReposComponent implements OnInit {

  similarRepos: Repo[];
  starIcon = faStar;
  @Input() repoName: '';
  @ViewChild('widgetsContent', { static: false })  widgetsContent: ElementRef<any>;

  constructor(private router: Router) { }

  ngOnInit() {
    this.deleteCurrentRepoFromRepoList();
  }

  deleteCurrentRepoFromRepoList() {
    const similarRepos = JSON.parse(localStorage.getItem('searchResults'));

    similarRepos.forEach((repo: any, index) => {
      if (repo.repoName === this.repoName) {
        similarRepos.splice(index, 1);
      }
    });
    this.similarRepos = similarRepos;
  }

  ClickSimilarRepo(platform:string, repoName: string) {
    localStorage.setItem('repoName', repoName);
    this.router.navigate(['/detail-page', platform, repoName]);

  }

  scrollRight() {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 430), behavior: 'smooth' });
  }

  scrollLeft() {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 430), behavior: 'smooth' });
  }

}
