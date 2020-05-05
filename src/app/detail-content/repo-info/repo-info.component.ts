import { Component, OnInit, Input } from '@angular/core';
import { faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { RepoInfo } from 'src/app/shared/models/repo-info.model';


@Component({
  selector: 'app-repo-info',
  templateUrl: './repo-info.component.html',
  styleUrls: ['./repo-info.component.css']
})
export class RepoInfoComponent implements OnInit {

  @Input() repoInfo: RepoInfo;
  starIcon = faStar;
  forkIcon = faCodeBranch;
  constructor() { }

  ngOnInit() {
  }

}
