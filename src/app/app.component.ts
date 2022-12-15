import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  BackButtonClick() {
    console.log("Back Button clicked!");
  }
  ForwardButtonClick() {
    console.log("Forward Button clicked!");
  }
}
