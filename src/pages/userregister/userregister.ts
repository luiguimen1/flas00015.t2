import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {LoadingController} from 'ionic-angular';
import {ToastController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';

/**
 * Generated class for the UserregisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-userregister',
    templateUrl: 'userregister.html',
})
export class UserregisterPage {
    ForRegUser: FormGroup;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private fb: FormBuilder,
        private conectar: ConectarProvider,
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController,
        private alertCtrl: AlertController) {
        this.iniciarFormulario();
    }

    iniciarFormulario() {
        this.ForRegUser = this.fb.group({
            nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z_-ÀÁÂÃÄÅÈÉÊËÌÍÎÏÐÑÒÓÔÕÖÙÚÛÜÝàáâãäèéêëìíîñòóôõöùúûüýÿ ]{3,20}$/)]],
            apellido: ['', [Validators.required, Validators.pattern(/^[a-zA-Z_-ÀÁÂÃÄÅÈÉÊËÌÍÎÏÐÑÒÓÔÕÖÙÚÛÜÝàáâãäèéêëìíîñòóôõöùúûüýÿ ]{3,20}$/)]],
            cedula: ['', [Validators.required, Validators.pattern(/^[0-9]{3,20}$/)]],
            correo: ['', [Validators.required, Validators.email]],
            dir: ['', [Validators.required, Validators.pattern(/^[a-zA-Z#_-ÀÁÂÃÄÅÈÉÊËÌÍÎÏÐÑÒÓÔÕÖÙÚÛÜÝàáâãäèéêëìíîñòóôõöùúûüýÿ ]{3,20}$/)]],
            tele: ['', [Validators.required, Validators.pattern(/^[0-9 ]{3,20}$/)]],
            clave: ['', [Validators.required, Validators.pattern(/^[a-zA-Z@#$%&_-ÀÁÂÃÄÅÈÉÊËÌÍÎÏÐÑÒÓÔÕÖÙÚÛÜÝàáâãäèéêëìíîñòóôõöùúûüýÿ ]{3,20}$/)]],
            clave1: ['', [Validators.required, Validators.pattern(/^[a-zA-Z@#$%&_-ÀÁÂÃÄÅÈÉÊËÌÍÎÏÐÑÒÓÔÕÖÙÚÛÜÝàáâãäèéêëìíîñòóôõöùúûüýÿ ]{3,20}$/)]]
        });
    }
    laclave = false;
    RegistrarUsuario() {
        let usuario: any = this.ForRegUser.value;
        if (usuario.clave != usuario.clave1) {
            this.laclave = true;
            this.ForRegUser.value.clave1 = "";
        } else {
            this.laclave = false;
            let estado = this.conectar.CrearUsuario(usuario);

            const loader = this.loadingCtrl.create({
                content: "Procesando su Solciictud de creación"
            });
            loader.present();
            estado.subscribe(data => {
                console.log(data);
                loader.dismiss();
                
                let datos:any = data;
                if(datos.success == "ok"){
                    this.presentAlert("Confirmación","El usuario fue registrado en sistema,<br>ya puede ingresar");
                    this.navCtrl.pop();
                }else{
                    this.presentAlert("Erro#24","Hay datos duplicados en la BD");
                }
            }, err => {
                console.log(err);
                loader.dismiss();

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
        console.table(usuario);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad UserregisterPage');
    }

    inicio1 = "password";

    getClave1() {
        return this.inicio1;
    }

    vercla1() {
        if (this.inicio1 == "password") {
            this.inicio1 = "text";
            console.log(this.inicio1);
        } else {
            this.inicio1 = "password";
            console.log(this.inicio1);
        }
    }


    inicio = "password";

    getClave() {
        return this.inicio;
    }

    vercla() {
        if (this.inicio == "password") {
            this.inicio = "text";
            console.log(this.inicio);
        } else {
            this.inicio = "password";
            console.log(this.inicio);
        }
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
