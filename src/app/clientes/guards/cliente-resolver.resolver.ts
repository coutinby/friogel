import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Resolve,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Cliente } from '../cliente';
import { ClientesService } from '../clientes.service';

@Injectable({
  providedIn: 'root',
})
export class ClienteResolverGuard implements Resolve<Cliente> {

    constructor(private service: ClientesService){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cliente> | Observable<any>{
       
        if(route.params && route.params['id']){
           return this.service.loadingByID(route.params['id']);
        }

        return of({
            id: null,
            nome: null,
            telefone: null,
            cpfCnpj: null,
            rua: null,
            cep: null,
            descricao: null
          });
    }
    
    
  }

