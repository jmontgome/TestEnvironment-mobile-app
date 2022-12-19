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
  }
  ToggleAppearanceMode() {
    document.body.classList.toggle("dark");
  }
}
