import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the OperacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-operaciones',
    templateUrl: 'operaciones.html',
})
export class OperacionesPage {
    numero1;
    numero2;
    error1: boolean;
    error2: boolean;
    resultado;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.error1 = false;
        this.error2 = false;
    }


    validar() {
        this.resultado = null;
        let estado = false;
        if (isNaN(parseFloat(this.numero1))) {
            this.error1 = true;
            setTimeout(() => {
                this.error1 = false;
            }, 3000);
            estado = true;
        }

        if (isNaN(parseFloat(this.numero2))) {
            this.error2 = true;
            setTimeout(() => {
                this.error2 = false;
            }, 3000);
            estado = true;
        }
        return estado;
    }
    suma() {
        if (!this.validar()) {
            this.resultado = "Suma es =" + (parseFloat(this.numero1) + parseFloat(this.numero2));
        }
    }

    resta() {
        if (!this.validar()) {
            this.resultado = "Resta es ="+(parseFloat(this.numero1) - parseFloat(this.numero2));
        }
    }

    multi() {
        if (!this.validar()) {
            this.resultado ="Multiplicación es ="+(parseFloat(this.numero1) * parseFloat(this.numero2));
        }
    }

    divi() {
        if (!this.validar()) {
            this.resultado = "La división es="+ (parseFloat(this.numero1) / parseFloat(this.numero2));
        }
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad OperacionesPage');
    }

    edificio;

    tabla() {
        this.edificio = Array();
        let cadena = "listado de resultados= <br>";
        for (let i = 0; i < this.numero2; i++) {
            let piso: any = {
                numero: this.numero1,
                por: (i + 1),
                resul: (this.numero1 * (i + 1))
            }
            this.edificio.push(piso);
        }
    }

}
