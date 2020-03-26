import { Component, OnInit } from '@angular/core';
import { faGithub, faGitlab, faBitbucket } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-samilar-repo',
  templateUrl: './samilar-repo.component.html',
  styleUrls: ['./samilar-repo.component.css']
})
export class SamilarRepoComponent implements OnInit {

  star = faStar;

  similarRepos = [
    {
      title: 'ReactiveCocoa',
      // tslint:disable-next-line: max-line-length
      description: 'Proident anim fugiat laborum ea dolore qui. In non veniam officia veniam voluptate exercitation ipsum ex cillum deserunt sit deserunt labore exercitation. Ullamco laborum nulla tempor dolor veniam nisi ut tempor proident et nulla. Dolor non incididunt ea duis fugiat cupidatat dolore eiusmod id eu culpa esse laboris duis. Consectetur incididunt commodo id aute incididunt ullamco. Labore sint consequat ullamco non pariatur pariatur in eiusmod anim aliquip deserunt ipsum pariatur eiusmod. Eu do tempor dolor consequat labore velit pariatur.',
      logo: faGithub,
      starCount: 10
    },
    {
      title: 'ReactTraining',
      // tslint:disable-next-line: max-line-length
      description: 'Proident anim fugiat laborum ea dolore qui. In non veniam officia veniam voluptate exercitation ipsum ex cillum deserunt sit deserunt labore exercitation. Ullamco laborum nulla tempor dolor veniam nisi ut tempor proident et nulla. Dolor non incididunt ea duis fugiat cupidatat dolore eiusmod id eu culpa esse laboris duis. Consectetur incididunt commodo id aute incididunt ullamco. Labore sint consequat ullamco non pariatur pariatur in eiusmod anim aliquip deserunt ipsum pariatur eiusmod. Eu do tempor dolor consequat labore velit pariatur.',
      logo: faGitlab,
      starCount: 12
    },
    {
      title: 'React Redux',
      // tslint:disable-next-line: max-line-length
      description: 'Proident anim fugiat laborum ea dolore qui. In non veniam officia veniam voluptate exercitation ipsum ex cillum deserunt sit deserunt labore exercitation. Ullamco laborum nulla tempor dolor veniam nisi ut tempor proident et nulla. Dolor non incididunt ea duis fugiat cupidatat dolore eiusmod id eu culpa esse laboris duis. Consectetur incididunt commodo id aute incididunt ullamco. Labore sint consequat ullamco non pariatur pariatur in eiusmod anim aliquip deserunt ipsum pariatur eiusmod. Eu do tempor dolor consequat labore velit pariatur.',
      logo: faBitbucket,
      starCount: 0
    },
    {
      title: 'react router',
      // tslint:disable-next-line: max-line-length
      description: 'Proident anim fugiat laborum ea dolore qui. In non veniam officia veniam voluptate exercitation ipsum ex cillum deserunt sit deserunt labore exercitation. Ullamco laborum nulla tempor dolor veniam nisi ut tempor proident et nulla. Dolor non incididunt ea duis fugiat cupidatat dolore eiusmod id eu culpa esse laboris duis. Consectetur incididunt commodo id aute incididunt ullamco. Labore sint consequat ullamco non pariatur pariatur in eiusmod anim aliquip deserunt ipsum pariatur eiusmod. Eu do tempor dolor consequat labore velit pariatur.',
      logo: faGithub,
      starCount: 120
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
