import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the ConectarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConectarProvider {
    url = "http://192.168.0.31/Flas015web/"
    options = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    token="QWER@QWE#$%@#Q@#EW..?";
    
    getToken(){
        return this.token;
    }
    
    getUrl(){
        return this.url;
    }

    constructor(public http: HttpClient) {
        console.log('Hello ConectarProvider Provider');
    }

    /**
     * Metodo que permite consultar un numero determinado de usuarios
     */
    listaRamdor(numero: number) {
        return this.http.get("https://randomuser.me/api/?results=" + numero);
    }

    /**
     * Metodo que permite enviar los datos de un usuario al servidor
     */
    CrearUsuario(Usuario: any) {
        Usuario.token = this.token;
        return this.http.post(this.url + "controller/user/crear.php", JSON.stringify(Usuario), this.options);
    }


    crearCategoria(cate) {
        cate.token = this.token;
        return this.http.post(this.url + "controller/cate/crear.php", JSON.stringify(cate), this.options);
    }

    listaCategoria() {
        let cate: any = {
            token: "QWER@QWE#$%@#Q@#EW..?"
        }
        return this.http.post(this.url + "controller/cate/lista.php", JSON.stringify(cate), this.options);
    }

    listaCategoriaXid(cate) {
        let estaCate = {
            token: this.token,
            id: cate.cod
        };
        return this.http.post(this.url + "controller/cate/listaxid.php", JSON.stringify(estaCate), this.options);
    }

    actuCategoria(cate:any) {
        cate.token = this.token;
        return this.http.post(this.url + "controller/cate/actu.php", JSON.stringify(cate), this.options);
    }
}


