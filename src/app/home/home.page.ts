import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ValueFromNotification } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  result: string | undefined;

  constructor(private actionSheetControl : ActionSheetController) {}

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
  }

  click() {
    
  }
  labelString() {
    return "Test!!";
  }

}
