import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the VerperfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-verperfil',
    templateUrl: 'verperfil.html',
})
export class VerperfilPage {
    perfil;
    estado =true;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.perfil = this.navParams.get('dato');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad VerperfilPage');
    }
    retroceder(){
        this.navCtrl.pop();
    }
    vermas(){
        this.estado=false;
    }
    vermenos(){
        this.estado=true;
    }
}
