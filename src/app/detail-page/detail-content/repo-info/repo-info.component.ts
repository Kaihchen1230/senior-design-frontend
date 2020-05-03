import { Component, OnInit, Input } from '@angular/core';
import { SingleRepo } from 'src/app/shared/single-repo.model';
import { faStar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-repo-info',
  templateUrl: './repo-info.component.html',
  styleUrls: ['./repo-info.component.css']
})
export class RepoInfoComponent implements OnInit {

  @Input() repoInfo: SingleRepo;
  starIcon = faStar;

  constructor() { }

  ngOnInit() {
  }

}
