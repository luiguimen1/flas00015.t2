import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/**
 * Generated class for the UserregisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-userregister',
    templateUrl: 'userregister.html',
})
export class UserregisterPage {
    ForRegUser: FormGroup;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private fb: FormBuilder) {
        this.iniciarFormulario();
    }

    iniciarFormulario() {
        this.ForRegUser = this.fb.group({
            nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z_-ÀÁÂÃÄÅÈÉÊËÌÍÎÏÐÑÒÓÔÕÖÙÚÛÜÝàáâãäèéêëìíîñòóôõöùúûüýÿ ]{3,20}$/)]],
            apellido: ['', [Validators.required, Validators.pattern(/^[a-zA-Z_-ÀÁÂÃÄÅÈÉÊËÌÍÎÏÐÑÒÓÔÕÖÙÚÛÜÝàáâãäèéêëìíîñòóôõöùúûüýÿ ]{3,20}$/)]],
            cedula: ['', [Validators.required, Validators.pattern(/^[0-9]{3,20}$/)]],
            correo: ['', [Validators.required, Validators.email]],
            dir: ['', [Validators.required, Validators.pattern(/^[a-zA-Z#_-ÀÁÂÃÄÅÈÉÊËÌÍÎÏÐÑÒÓÔÕÖÙÚÛÜÝàáâãäèéêëìíîñòóôõöùúûüýÿ ]{3,20}$/)]],
            tele: ['', [Validators.required, Validators.pattern(/^[0-9 ]{3,20}$/)]],
            clave: ['', [Validators.required, Validators.pattern(/^[a-zA-Z@#$%&_-ÀÁÂÃÄÅÈÉÊËÌÍÎÏÐÑÒÓÔÕÖÙÚÛÜÝàáâãäèéêëìíîñòóôõöùúûüýÿ ]{3,20}$/)]],
            clave1: ['', [Validators.required, Validators.pattern(/^[a-zA-Z@#$%&_-ÀÁÂÃÄÅÈÉÊËÌÍÎÏÐÑÒÓÔÕÖÙÚÛÜÝàáâãäèéêëìíîñòóôõöùúûüýÿ ]{3,20}$/)]]
        });
    }

    RegistrarUsuario() {
        let usuario = this.ForRegUser.value;
        console.table(usuario);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad UserregisterPage');
    }

    inicio1 = "password";

    getClave1() {
        return this.inicio1;
    }

    vercla1() {
        if (this.inicio1 == "password") {
            this.inicio1 = "text";
            console.log(this.inicio1);
        } else {
            this.inicio1 = "password";
            console.log(this.inicio1);
        }
    }
    
    
    inicio = "password";

    getClave() {
        return this.inicio;
    }

    vercla() {
        if (this.inicio == "password") {
            this.inicio = "text";
            console.log(this.inicio);
        } else {
            this.inicio = "password";
            console.log(this.inicio);
        }
    }

}
