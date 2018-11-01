import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CatemodifiPage} from '../catemodifi/catemodifi';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {LoadingController, ToastController, AlertController} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
/**
 * Generated class for the CateverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-catever',
    templateUrl: 'catever.html',
})
export class CateverPage {
    cate;
    calidad = 50;
    imageURI;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private conecta: ConectarProvider,
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController,
        private alertCtrl: AlertController,
        private camera: Camera) {
        this.cate = this.navParams.get("cate");
    }
    
    getPictureCamara() {
        let options: CameraOptions = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 500,
            allowEdit:true,
            saveToPhotoAlbum:true,
            quality: this.calidad
        }
        
        this.camera.getPicture(options)
            .then(imageData => {
                this.imageURI = `data:image/jpeg;base64,${imageData}`;
            })
            .catch(error => {
                console.error(error);
            });
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad CateverPage');
    }

    ionViewCanEnter() {
        this.traeCate();
    }

    irAModificar() {
        this.navCtrl.push(CatemodifiPage, {cate: this.cate})
    }

    traeCate() {
        const loader = this.loadingCtrl.create({
            content: "Consultado la categoría..."
        });
        loader.present();
        let estado = this.conecta.listaCategoriaXid(this.cate);
        estado.subscribe(data => {
            loader.dismiss();
            let dato: any = data;
            if (dato.success == "ok") {
                this.cate = dato.result[0];
            } else {
                this.presentAlert("Error #27", "<p ion-text color='danger'>La categoria ya no existe</p>")
                this.navCtrl.pop();
            }
        }, err => {
            loader.dismiss();
            this.presentAlert("Error #26", "<p ion-text color='danger'>No hay conexión con el servidor</p>")
            this.navCtrl.pop();
        });
    }

    presentAlert(titulo, mensaje) {
        let alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    }

    retornar() {
        this.navCtrl.pop();
    }

}
