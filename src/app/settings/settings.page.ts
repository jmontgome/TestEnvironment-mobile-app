import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage implements OnInit {
  AppearanceMode: string = "light";
  
  constructor() { }

  ngOnInit() {

  }

  SetAppearanceMode(mode: string) {
    document.body.classList.value = mode;
  }
  ToggleAppearanceMode() {
    document.body.classList.toggle("dark");
  }
}
