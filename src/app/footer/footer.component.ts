import { Component, OnInit } from '@angular/core';
import {  } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faBitbucket } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  mapMarkedIcon = faMapMarkerAlt;
  phoneIcon = faPhoneAlt;
  gitHub = faGithub;
  linkedIn = faLinkedin;
  constructor() { }

  ngOnInit() {
  }

}
