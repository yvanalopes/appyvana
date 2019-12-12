import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Revendedor } from '../../models/revendedor.class';
import { RevendedorService } from '../../services/revendedor.service';

@Component({
  selector: 'app-cadastrorevendedor',
  templateUrl: './cadastrorevendedor.component.html',
  styleUrls: ['./cadastrorevendedor.component.css']
})
export class CadastrorevendedorComponent implements OnInit {

  cadastroRevendedorForm: FormGroup;
  submitted: boolean;
  revendedor: Revendedor;

  constructor(private formBuilder: FormBuilder, private revendedorService: RevendedorService) { }

  ngOnInit() {
    this.cadastroRevendedorForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      csenha: ['', Validators.required]
    });
  }

  get f() { return this.cadastroRevendedorForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.cadastroRevendedorForm.invalid) {
      return;
    } 
    this.revendedor = new Revendedor();
    this.revendedor.nome = this.f.nome.value;
    this.revendedor.cpf = this.f.cpf.value;
    this.revendedor.senha = this.f.senha.value;
    this.revendedorService.cadastrarRevendedor(this.revendedor);
  }
}
