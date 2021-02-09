import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.page.html',
  styleUrls: [
    './styles/testimonies.page.scss',
    './styles/testimonies.shell.scss',
    './styles/testimonies.responsive.scss'
  ]
})
export class TestimoniesPage { 
  constructor(
    public actionSheetController: ActionSheetController
  ) {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose Option',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Record Video',
        role: 'destructive',
        icon: 'videocam',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Record Voice Message',
        icon: 'recording',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Add Image',
        icon: 'images',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Add Document',
        icon: 'document',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
