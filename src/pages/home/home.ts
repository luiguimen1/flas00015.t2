import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {OperacionesPage} from '../operaciones/operaciones';
import {MisionPage} from '../mision/mision';
import {HojavidaPage} from '../hojavida/hojavida';
import {VisionPage} from '../vision/vision';
import {CategestionPage} from '../categestion/categestion';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

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

}
