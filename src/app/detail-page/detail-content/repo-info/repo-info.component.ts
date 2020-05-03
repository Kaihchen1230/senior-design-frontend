import { Component, OnInit, Input } from '@angular/core';
import { SingleRepo } from 'src/app/shared/models/single-repo.model';


@Component({
  selector: 'app-repo-info',
  templateUrl: './repo-info.component.html',
  styleUrls: ['./repo-info.component.css']
})
export class RepoInfoComponent implements OnInit {

  @Input() repoInfo: SingleRepo;

  constructor() { }

  ngOnInit() {
    // console.log('this is repoInfo: ', this.repoInfo);
  }

}
