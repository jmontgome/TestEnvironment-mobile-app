import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { APIService } from '../data/Models/APIService';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { stringify } from 'querystring';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  result: string | undefined;
  messageInput: string = "";

  constructor(private actionSheetControl : ActionSheetController, private http: HttpClient) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetControl.create({
      header: "Example header",
      subHeader: 'Example subheader',
      buttons: [
        {
          text: 'Yes',
          data: {
            action: 'submit',
          },
          handler: () => this.SubmitToServer(),
        },
        {
          text: 'No',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          }
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
    console.log(result);
  }
  async SubmitToServer() {
    var api = new APIService(this.http);
    console.log(api.SendTestObjectToServer(this.messageInput));
    console.log(api.SendSimpleTestToServer(this.messageInput));
  }

  labelString() {
    return "Test!!";
  }

}
