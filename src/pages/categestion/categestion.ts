import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CateregistraPage} from '../cateregistra/cateregistra';
import {CatelistaPage} from '../catelista/catelista';


/**
 * Generated class for the CategestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-categestion',
    templateUrl: 'categestion.html',
})
export class CategestionPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CategestionPage');
    }

    irAgregarCate() {
        this.navCtrl.push(CateregistraPage);
    }
    irListaCate() {
        this.navCtrl.push(CatelistaPage);
    }

}
