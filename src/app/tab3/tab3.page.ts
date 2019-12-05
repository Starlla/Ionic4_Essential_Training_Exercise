import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertController: AlertController) {}

    async selectImageSource() {
          const alert = await this.alertController.create({
            header: 'Select Source',
            message: 'Pick a source for your image',
            buttons: [
              {
                text: 'Camera',
                handler: () => {
                }
              },
                {
                text: 'Gallery',
                handler: () => {
                }
              },
            ]
          });
          await alert.present();
    }
}
