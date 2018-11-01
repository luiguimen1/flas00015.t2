import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {CateverPage} from '../catever/catever';

/**
 * Generated class for the CatelistaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-catelista',
    templateUrl: 'catelista.html',
})
export class CatelistaPage {

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private conecta: ConectarProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CatelistaPage');

    }

    edificio;

    cargaLista() {
        let estado = this.conecta.listaCategoria();
        estado.subscribe(data => {
            console.log(data);
            let datos: any = data;
            this.edificio = datos.result;
        }, err => {
            console.log(err);
        });
    }

    ionViewCanEnter() {
        this.cargaLista();
    }


    vercate(cualCate) {
        this.navCtrl.push(CateverPage, {cate: cualCate});
    }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }

}
