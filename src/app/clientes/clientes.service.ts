import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Cliente } from './cliente';
import {delay, take, tap} from 'rxjs/operators'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API= `${environment.API}clientes`;

constructor(private http: HttpClient) { }

list(){
  return this.http.get<Cliente[]>(this.API).pipe(
    delay(1500)
  )
}

create(cliente: any){
  return this.http.post(this.API, cliente).pipe(take(1));
}

loadingByID(id: any){
  return this.http.get<Cliente>(`${this.API}/${id}`).pipe(take(1));
}

}
