import { Component } from '@angular/core';
import { Route, Router, RoutesRecognized } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { User } from './data/Models/User';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user: User = new User();
  routingModule: AppRoutingModule = new AppRoutingModule();

  ShowSequenceNavigation: boolean = false;

  constructor() {}
  
  //Logic
  GetUsername() {
    if (this.user.username == '') return 'Not Logged In'
    else return this.user.username;
  }
  GetRoutes() {
    let array: Array<Route> = new Array<Route>();
    this.routingModule.routes.forEach(route => {
      if (route.path != '') array.push(route);
    });
    return array;
  }
  
  //Input Methods
  BackButtonClick() {
    console.log("Back Button clicked!");
  }
  ForwardButtonClick() {
    console.log("Forward Button clicked!");
  }
}
