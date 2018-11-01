import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {LoadingController, ToastController, AlertController} from 'ionic-angular';

/**
 * Generated class for the CatemodifiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-catemodifi',
    templateUrl: 'catemodifi.html',
})
export class CatemodifiPage {
    ForRegCate: FormGroup;
    cate: any;
    mensaje;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public fb: FormBuilder,
        private conecta: ConectarProvider,
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController,
        private alertCtrl: AlertController) {
        this.cate = this.navParams.get("cate");
        this.iniciarFormulario();
        this.traeCate();
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
                this.iniciarFormulario();
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

    ionViewCanEnter() {
       // this.traeCate();
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad CatemodifiPage');
    }

    iniciarFormulario() {
        this.ForRegCate = this.fb.group({
            nombre: [this.cate.nom, [Validators.required, Validators.pattern(/^[a-zA-Z_-ÀÁÂÃÄÅÈÉÊËÌÍÎÏÐÑÒÓÔÕÖÙÚÛÜÝàáâãäèéêëìíîñòóôõöùúûüýÿ ]{3,20}$/)]],
            detalles: [this.cate.det, [Validators.required, Validators.minLength(3), Validators.maxLength(200)]]
        });
    }


    ModificarCate() {
        const loader = this.loadingCtrl.create({
            content: "Procesando su Solicitud de modificación de la categoría"
        });
        loader.present();
        let catenew: any = this.ForRegCate.value;
        catenew.id = this.cate.cod;
        let estado = this.conecta.actuCategoria(catenew);
        estado.subscribe(data => {
            this.mensaje = JSON.stringify(data);
            loader.dismiss();
            let datos: any = data;
            if (datos.success == "ok") {
                this.presentAlert("Confirmación", "LA categoria fue modificada en sistema,<br>ya agregar productos a está.");
                catenew.foto = this.cate.foto;
                catenew.cod = this.cate.cod;
                this.cate = catenew;
                //this.navCtrl.pop();
            } else {
                this.presentAlert("Erro#25", "No se actualizo la Categoría");
            }
        },
            err => {
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
            })
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
