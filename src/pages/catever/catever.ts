import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CatemodifiPage} from '../catemodifi/catemodifi';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {LoadingController, ToastController, AlertController} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
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
    ipserve;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private conecta: ConectarProvider,
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController,
        private alertCtrl: AlertController,
        private camera: Camera,
        private transfer: FileTransfer) {
        this.cate = this.navParams.get("cate");
        this.ipserve = this.conecta.getUrl(); 
    }

    getPictureCamara() {
        let options: CameraOptions = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 500,
            allowEdit: true,
            saveToPhotoAlbum: true,
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
    info;
    CargarImagen() {
        let loader = this.loadingCtrl.create({
            content: "<b>El archivo esta Cargado...</b>"
        });
        loader.present();
        const fileTransfer: FileTransferObject = this.transfer.create();
        var datos = {id: this.cate.cod, type: 'cate', token: this.conecta.getToken(), oldfoto: this.cate.foto};
        let options: FileUploadOptions = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {},
            httpMethod: 'POST',
            params: datos
        }
        this.info = "Procesando";
        fileTransfer.upload(this.imageURI, this.conecta.getUrl() + 'controller/SubirFoto.php', options)
            .then((data) => {
                loader.dismiss();
                this.actualizar(data);
                // this.info = JSON.stringify(data)+" -> Lo que llega";
            }, (err) => {
                console.log(err);
                loader.dismiss();
                this.info = " -> Error de Comunicación";
                // Puede Colocar una alerta de que existe un problema con el servidor
            });
    }

    informe;
    actualizar(data:any) {
        let dato: any = JSON.parse(data.response);
        this.informe = dato.response;
        if(dato.success=="ok"){
            this.cate.foto = dato.foto;
            this.imageURI = false;
            this.tostado("La imagen se modifico correctamente");
        }else{
            this.tostado("La imagen no fue modificada, intente de nuevo y/o comunique con el administrador");
        }
    }
    
    tostado(mensaje){
        let toast = this.toastCtrl.create({
                message: mensaje,
                position: 'botton',
                showCloseButton: true,
                closeButtonText: "Cerrar"
            });
            toast.onDidDismiss(() => {
                console.log('Dismissed toast');
            });
            toast.present();
    }

}
