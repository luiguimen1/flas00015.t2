import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {OperacionesPage} from '../pages/operaciones/operaciones';
import {MisionPage} from '../pages/mision/mision';
import {HojavidaPage} from '../pages/hojavida/hojavida';
import {VisionPage} from '../pages/vision/vision';
import {HttpClientModule } from '@angular/common/http';
import { ConectarProvider } from '../providers/conectar/conectar';
@NgModule({
    declarations: [
        MyApp,
        HomePage,
        OperacionesPage,
        MisionPage,
        HojavidaPage,
        VisionPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        OperacionesPage,
        MisionPage,
        HojavidaPage,
        VisionPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ConectarProvider
    ]
})
export class AppModule {}
