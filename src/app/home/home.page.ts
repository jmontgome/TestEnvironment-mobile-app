import { Component } from '@angular/core';
import { ValueFromNotification } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  click() {
    console.log("Test!");
  }
  labelString() {
    return "Test!!";
  }

}
