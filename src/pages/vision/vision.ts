import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {LoadingController, AlertController} from 'ionic-angular';


/**
 * Generated class for the VisionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-vision',
    templateUrl: 'vision.html',
})
export class VisionPage {
    numero;
    error;
    edificio;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private conecta: ConectarProvider,
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad VisionPage');
    }

    traerLista() {
        if (isNaN(parseFloat(this.numero))) {
            this.error = true;
            setTimeout(() => {
                this.error = false;
            }, 3000);
            this.miAlerta("Error #20","debe Ingresar un numero");
        } else {
            const loader = this.loadingCtrl.create({
                content: "Buscando la lista de usuarios..."
            });
            loader.present();
            this.edificio = null;
            let estado = this.conecta.listaRamdor(this.numero);
            estado.subscribe(data => {
                console.log(data);
                loader.dismiss();
                this.edificio = data;
                this.edificio = this.edificio.results;
            }, err => {
            this.miAlerta("Error #21","No existe conexción con el servidor!");
                console.log(err);
                loader.dismiss();
            });
        }

    }




    miAlerta(titulo,mensaje) {
        const alert = this.alertCtrl.create({
            title: '<h3 class="titulo">'+titulo+'</h3>',
            subTitle: '<div class="error"><p>'+mensaje+'</p></div>',
            buttons: ['Cerrar']
        });
        alert.present();
    }
}
