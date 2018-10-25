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
import {VerperfilPage} from '../pages/verperfil/verperfil';

//page de categorias
import {CategestionPage} from '../pages/categestion/categestion';
import {CatelistaPage} from '../pages/catelista/catelista';
import {CatemodifiPage} from '../pages/catemodifi/catemodifi';
import {CateregistraPage} from '../pages/cateregistra/cateregistra';
import {CateverPage} from '../pages/catever/catever';
//page de Producto
import {ProdgestionPage} from '../pages/prodgestion/prodgestion';
import {ProdlistaPage} from '../pages/prodlista/prodlista';
import {ProdmodifiPage} from '../pages/prodmodifi/prodmodifi';
import {ProdregistraPage} from '../pages/prodregistra/prodregistra';
import {ProdverPage} from '../pages/prodver/prodver';
//page de usuario
import {UserloginPage} from '../pages/userlogin/userlogin';
import {UsermodifiPage} from '../pages/usermodifi/usermodifi';
import {UserregisterPage} from '../pages/userregister/userregister';
import {UserlistaPage} from '../pages/userlista/userlista';
import {UserverPage} from '../pages/userver/userver';
//page camara
import {TomarFotoPage} from '../pages/tomar-foto/tomar-foto';
//Opciones de enlace externo de la app
import {HttpClientModule} from '@angular/common/http';
import {ConectarProvider} from '../providers/conectar/conectar';
@NgModule({
    declarations: [
        MyApp,
        HomePage,
        OperacionesPage,
        MisionPage,
        HojavidaPage,
        VisionPage,
        VerperfilPage,
        CategestionPage,
        CatelistaPage,
        CatemodifiPage,
        CateregistraPage,
        CateverPage,
        ProdgestionPage,
        ProdlistaPage,
        ProdmodifiPage,
        ProdregistraPage,
        ProdverPage,
        UserloginPage,
        UsermodifiPage,
        UserregisterPage,
        UserlistaPage,
        UserverPage,
        TomarFotoPage
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
        VisionPage,
        VerperfilPage,
        CategestionPage,
        CatelistaPage,
        CatemodifiPage,
        CateregistraPage,
        CateverPage,
        ProdgestionPage,
        ProdlistaPage,
        ProdmodifiPage,
        ProdregistraPage,
        ProdverPage,
        UserloginPage,
        UsermodifiPage,
        UserregisterPage,
        UserlistaPage,
        UserverPage,
        TomarFotoPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ConectarProvider
    ]
})
export class AppModule {}
