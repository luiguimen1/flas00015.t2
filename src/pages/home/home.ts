import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {OperacionesPage} from '../operaciones/operaciones';
import {MisionPage} from '../mision/mision';
import {HojavidaPage} from '../hojavida/hojavida';
import {VisionPage} from '../vision/vision';
import {CategestionPage} from '../categestion/categestion';
import {UserregisterPage} from '../userregister/userregister';
import {UserloginPage} from '../userlogin/userlogin';
import {ProdgestionPage} from '../prodgestion/prodgestion';



@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    
    irlogin(){
        this.navCtrl.push(UserloginPage);
    }
    irRegisterUser(){
        this.navCtrl.push(UserregisterPage);
    }

    constructor(public navCtrl: NavController) {

    }

    irMatematicas() {
        this.navCtrl.push(OperacionesPage);
    }
    
    irMision(){
        this.navCtrl.push(MisionPage);
    }
    
    irVision(){
        this.navCtrl.push(VisionPage);
    }
    
    irHV(){
        this.navCtrl.push(HojavidaPage);
    }
    
    irCategoria(){
        this.navCtrl.push(CategestionPage);
    }
    
    irGestionPro(){
        this.navCtrl.push(ProdgestionPage);
    }

}
