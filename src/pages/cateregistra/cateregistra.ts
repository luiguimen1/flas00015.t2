import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
/**
 * Generated class for the CateregistraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-cateregistra',
    templateUrl: 'cateregistra.html',
})
export class CateregistraPage {
    ForRegCate: FormGroup;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public fb: FormBuilder) {
        this.iniciarFormulario();
    }
    
    iniciarFormulario(){
        this.ForRegCate = this.fb.group({
            nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z_-ÀÁÂÃÄÅÈÉÊËÌÍÎÏÐÑÒÓÔÕÖÙÚÛÜÝàáâãäèéêëìíîñòóôõöùúûüýÿ ]{3,20}$/)]],
            detalles: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]] 
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CateregistraPage');
    }
    
    RegistrarCate(){
        console.table(this.ForRegCate.value);
    }

}
