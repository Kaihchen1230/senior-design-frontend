import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent implements OnInit {

  @Input() errorMes: string;
  
  constructor() { }

  ngOnInit() {
  }

  onHandleError () {

  }
}
