import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { PizzaService } from '../../pizza.service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Pizza } from '../../models/pizza';
import { FormGroup, FormControl, Validators } from '@angular/forms';

/**
 * Generated class for the PizzaAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pizza-add',
  templateUrl: 'pizza-add.html',
})
export class PizzaAddPage {

  pizza: Pizza;
  form: FormGroup;
  base64Image:String;
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  constructor(private camera: Camera, public pizzaService: PizzaService, private base64ToGallery : Base64ToGallery,
    public navCtrl: NavController, public navParams: NavParams, private mediaCapture: MediaCapture) {
      this.form = new FormGroup({
        name: new FormControl("", Validators.required),
        description: new FormControl("", Validators.required),
        price: new FormControl("", Validators.required),
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PizzaAddPage');
  }

  onSubmit(){
    this.pizzaService.add(this.form.value).subscribe(pizza => {
          this.pizza = pizza;
    });
  }

  runCamera(){
    this.camera.getPicture(this.options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.base64ToGallery.base64ToGallery(imageData, { prefix: '_img' }).then(
        res => console.log('Image enregistre avec succes', res),
        err => console.log('Erreur dans la sauvegarde en galerie', err)
      );
    }, (err) => {

    });
  }

}
