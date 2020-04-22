import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'senior-design-frontend';

  @HostListener('window:onbeforeunload', ['$event'])
    clearLocalStorage(event) {
        localStorage.clear();
    }
}
