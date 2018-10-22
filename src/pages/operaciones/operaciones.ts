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
    suma() {
        this.resultado = null;
        if (isNaN(parseFloat(this.numero1))) {
            this.error1 = true;
            setTimeout(() => {
                this.error1 = false;
            }, 2000);
        } else if (isNaN(parseFloat(this.numero2))) {
            this.error2 = true;
            setTimeout(() => {
                this.error2 = false;
            }, 2000);
        } else {
            this.resultado = parseFloat(this.numero1) + parseFloat(this.numero2);
        }
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad OperacionesPage');
    }

    edificio;

    tabla() {
        this.edificio = Array();
        let cadena="listado de resultados= <br>";
        for (let i = 0; i < this.numero2; i++) {
            let piso: any={
                numero: this.numero1,
                por: (i + 1),
                resul: (this.numero1 * (i + 1))
            }
            this.edificio.push(piso);
            cadena += piso.numero + " * "+ piso.por + " = "+ piso.resul+"<br>";
        }
        
        this.resultado = cadena;
    }

}
