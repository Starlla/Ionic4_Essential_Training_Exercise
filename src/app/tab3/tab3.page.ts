import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  myProfileImage = 'https://avatars0.githubusercontent.com/u/39388433?s=460&v=4';

  constructor(private alertController: AlertController, private camera: Camera) {}

    async selectImageSource() {
      const cameraOptions: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetHeight: 200,
        correctOrientation: true,
        sourceType: this.camera.PictureSourceType.CAMERA
      };
      const galleryOptions: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        targetHeight: 200,
        correctOrientation: true,
        sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
      };


      const alert = await this.alertController.create({
        header: 'Select Source',
        message: 'Pick a source for your image',
        buttons: [
          {
            text: 'Camera',
            handler: () => {
              this.camera.getPicture(cameraOptions)
                  .then((imageData) => {
                this.myProfileImage = 'data:image/jpeg;base64,' + imageData;
              });
            }
          },
            {
            text: 'Gallery',
            handler: () => {
              this.camera.getPicture(galleryOptions)
                  .then((imageData) => {
                    this.myProfileImage = 'data:image/jpeg;base64,' + imageData;
                  });
            }
          },
        ]
      });
      await alert.present();
}
}
