import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentImage = null;

  constructor(public navCtrl: NavController,
              private file: File,
              private camera: Camera,
              private socialSharad: SocialSharing) {

  }

  loadGaleria() {
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.NATIVE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE

    }

    this.camera.getPicture(options).then(data => {
      this.currentImage = 'data:image/jpeg;base64,' + data;
    }).catch(err => {
      // Handle error
      console.error(err);
    })


  }3

  openWhatsapp(){
    this.socialSharad.shareViaWhatsAppToReceiver('+5598991581962', 'Teste Eneylton Produto Whatsapp','http://localhost:8000/src/assets/imgs/empresa.jpg', null)
  .then(() => {
    // Success!
    console.log('shared');
  }).catch(() => {
    // Error!
  });
}
  


  // async enviarFoto(){
    
  //   let file = await this.resolveLocalFile();
    
  //   console.log('FILE:', file );

  //   this.socialSharad.share('', '', file.nativeURL).then(s => {
  //       this.file.removeFile(this.file.cacheDirectory, file.name);
  //     }).catch(e => {
  //       alert('Error' + e);
  //     })

  // }

  // async  resolveLocalFile() {

  //   return this.file.copyFile(`${this.file.applicationDirectory}/src/assets/imgs/`, `empresa.jpg`,
  //   this.file.cacheDirectory, `${new Date().getTime}.jpg`);

  //   // return  'this.file.applicationDirectory' + '/src/assets/imgs/' + 'empresa.jpg' ;
 
  // }


}
