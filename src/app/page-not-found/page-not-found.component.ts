import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit, AfterViewInit {
  @ViewChild('firstDigit', {static: false}) firstDigit: ElementRef;
  @ViewChild('secondDigit', {static: false}) secondDigit: ElementRef;
  @ViewChild('thirdDigit', {static: false}) thirdDigit: ElementRef;

  constructor() { }

  ngOnInit() {
    const selector1 = document.querySelector('.firstDigit');
    const selector3 = document.querySelector('.thirdDigit');
    const selector2 = document.querySelector('.secondDigit');

  }

  ngAfterViewInit() {
    console.log('this is firstDigit: ', this.firstDigit);
    const selector1 = this.firstDigit.nativeElement;
    const selector3 = this.secondDigit.nativeElement;
    const selector2 = this.thirdDigit.nativeElement;
    let i = 0;
    const time = 30;

    const loop3 = setInterval(() => {
        if (i > 40) {
            clearInterval(loop3);
            this.thirdDigit.nativeElement.textContent = '4';
        } else {
            const randomNum = Math.floor(Math.random() * 9) + 1;
            this.thirdDigit.nativeElement.textContent = String(randomNum);
            i++;
        }
    }, time);
    const loop2 = setInterval(() => {
        if (i > 80) {
            clearInterval(loop2);
            this.secondDigit.nativeElement.textContent = '0';
        } else {
            const randomNum = Math.floor(Math.random() * 9) + 1;
            this.secondDigit.nativeElement.textContent = String(randomNum);
            i++;
        }
    }, time);
    const loop1 = setInterval(() => {
        if (i > 100) {
            clearInterval(loop1);
            this.firstDigit.nativeElement.textContent = '4';
        } else {
            const randomNum = Math.floor(Math.random() * 9) + 1;
            this.firstDigit.nativeElement.textContent = String(randomNum);
            i++;
        }
    }, time);

  }

}
