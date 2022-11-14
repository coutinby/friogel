import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, empty, Observable, Subject } from 'rxjs';
import { Cliente } from '../cliente';

import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes!: Cliente[];

  clientes$!: Observable<Cliente[]>;

  constructor(private service: ClientesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.service.list().subscribe(dados => this.clientes = dados);
    this.clientes$= this.service.list()
    .pipe();
    catchError(error => {
      console.error(error);
      return empty();
    })

  }

  onEdit(id: any){
    this.router.navigate(['editar', id], {relativeTo: this.route})

  }

}
