import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientesFormComponent } from './clientes-form/clientes-form.component';



@NgModule({
  declarations: [
    ClientesListaComponent, ClientesFormComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ClientesModule { }
