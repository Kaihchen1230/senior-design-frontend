import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {

  @Input() errorMes: string;

  constructor(private location: Location,
              private router: Router) { }

  ngOnInit() {
  }

  onGoBack() {
    this.location.back();
  }

  onGoHomePage() {
    this.router.navigate(['/']);
  }
}
