import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ProdregistraPage} from '../prodregistra/prodregistra'
import {ProdlistaPage} from '../prodlista/prodlista'
/**
 * Generated class for the ProdgestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-prodgestion',
    templateUrl: 'prodgestion.html',
})
export class ProdgestionPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProdgestionPage');
    }
    
    irAgregarProdu(){
        this.navCtrl.push(ProdregistraPage);
    }
    
    irListaProdu(){
        this.navCtrl.push(ProdlistaPage);
    }

}
