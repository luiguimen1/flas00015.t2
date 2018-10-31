import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ConectarProvider} from '../../providers/conectar/conectar';

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
      private conecta:ConectarProvider) {
      this.cargaLista();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatelistaPage');
    
  }
  
  edificio;
  
  cargaLista(){
      let estado = this.conecta.listaCategoria();
      estado.subscribe(data=>{
          console.log(data); 
          let datos:any = data;
          this.edificio = datos.result;
          
      },err=>{
          console.log(err);
      });
  }

}
