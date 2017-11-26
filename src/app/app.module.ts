import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PizzaPage } from '../pages/pizza/pizza';
import { PizzaGestionPage } from '../pages/pizza-gestion/pizza-gestion';
import { PizzaAddPage } from '../pages/pizza-add/pizza-add';
import { PizzaUpdatePage } from '../pages/pizza-update/pizza-update';
import { PizzaService } from '../pizza.service';
import { IngredientPage } from '../pages/ingredient/ingredient';
import { IngredientAddPage } from '../pages/ingredient-add/ingredient-add';
import { IngredientUpdatePage } from '../pages/ingredient-update/ingredient-update';
import { IngredientService } from '../ingredient.service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PizzaPage,
    PizzaGestionPage,
    PizzaAddPage,
    PizzaUpdatePage,
    IngredientPage,
    IngredientAddPage,
    IngredientUpdatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PizzaPage,
    PizzaGestionPage,
    PizzaAddPage,
    PizzaUpdatePage,
    IngredientPage,
    IngredientAddPage,
    IngredientUpdatePage
  ],
  providers: [
    StatusBar,
    PizzaService,
    IngredientService,
    SplashScreen,
    Camera,
    FormsModule,
    Base64ToGallery,
    MediaCapture,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
