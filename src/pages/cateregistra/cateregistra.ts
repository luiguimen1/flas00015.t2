import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {LoadingController, ToastController, AlertController} from 'ionic-angular';

/**
 * Generated class for the CateregistraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-cateregistra',
    templateUrl: 'cateregistra.html',
})
export class CateregistraPage {
    ForRegCate: FormGroup;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public fb: FormBuilder,
        private conecta: ConectarProvider,
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController,
        private alertCtrl: AlertController) {
        this.iniciarFormulario();
    }

    iniciarFormulario() {
        this.ForRegCate = this.fb.group({
            nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z_-ÀÁÂÃÄÅÈÉÊËÌÍÎÏÐÑÒÓÔÕÖÙÚÛÜÝàáâãäèéêëìíîñòóôõöùúûüýÿ ]{3,20}$/)]],
            detalles: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]]
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CateregistraPage');
    }

    RegistrarCate() {


        const loader = this.loadingCtrl.create({
            content: "Procesando su Solicitud de creación de la categoría"
        });
        loader.present();
        let estado = this.conecta.crearCategoria(this.ForRegCate.value);
        estado.subscribe(data => {
            loader.dismiss();
            console.log(data);


            let datos: any = data;
            if (datos.success == "ok") {
                this.presentAlert("Confirmación", "LA categoria fue registrado en sistema,<br>ya agregar productos a está.");
                this.navCtrl.pop();
            } else {
                this.presentAlert("Erro#25", "No se registro la Categoría");
            }




        }, err => {
            loader.dismiss();
            console.log(err);
            let toast = this.toastCtrl.create({
                message: 'No hay conexción con el servidor',
                position: 'botton',
                showCloseButton: true,
                closeButtonText: "Cerrar"
            });

            toast.onDidDismiss(() => {
                console.log('Dismissed toast');
            });

            toast.present();
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
}
