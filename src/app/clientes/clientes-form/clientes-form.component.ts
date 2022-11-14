import { IfStmt, ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from '../clientes.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css'],
})
export class ClientesFormComponent implements OnInit {
  form!: FormGroup;
  submited = false;

  constructor(
    private fb: FormBuilder,
    private service: ClientesService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {

    
  }

  updateForm(cliente: any){
    this.form.patchValue({
      id: cliente.id,
      nome: cliente.nome,
      telefone: cliente.telefone,
      cpfCnpj: cliente.cpfCnpj,
      rua: cliente.rua,
      cep: cliente.cep,
      descricao: cliente.descricao
    })
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }

  onSubmit() {
    this.submited = true;
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe();
      this.location.back();
    }
  }

  onCancel() {
    this.submited = false;
    this.location.back();
  }
}
