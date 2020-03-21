import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-owner-info',
  templateUrl: './owner-info.component.html',
  styleUrls: ['./owner-info.component.css']
})
export class OwnerInfoComponent implements OnInit {

  owner = {
    display_name: 'John Mulligan',
    uuid: '{c8614bfa-831a-49eb-866b-4bdd87c8c2c2}',
    links: {
        self: {
            href: 'https://api.bitbucket.org/2.0/users/%7Bc8614bfa-831a-49eb-866b-4bdd87c8c2c2%7D'
        },
        html: {
            href: 'https://bitbucket.org/%7Bc8614bfa-831a-49eb-866b-4bdd87c8c2c2%7D/'
        },
        avatar: {
            // tslint:disable-next-line: max-line-length
            href: 'https://assets.gitlab-static.net/uploads/-/system/user/avatar/408123/avatar.png'
        }
    },
    nickname: 'phlogistonjohn',
    type: 'user',
    account_id: '557058:8ffe6a8c-8424-4156-9786-0102572cf345'
  };

  constructor() { }

  ngOnInit() {
  }

}
