import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompraService } from '../../services/compras.service';
import { CadastroCompras } from '../../models/cadastroCompras.model';
import { Compra } from 'src/app/models/compra.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastrocompras.component.html',
  styleUrls: ['./cadastrocompras.component.css']
})
export class CadastrocomprasComponent implements OnInit {

  cadastroForm: FormGroup;
  cadastroModel: CadastroCompras;
  submitted: boolean;
  compra: Compra;

  constructor(private formBuilder: FormBuilder, private router: Router, private compraService: CompraService) { }

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      valor: ['', Validators.required],
      data: ['', Validators.required]
    });
    if(this.compraService.modelCompra) {   
      this.compra = this.compraService.modelCompra;
      this.compraService.modelCompra = null;
      this.cadastroForm.controls.codigo.setValue(this.compra.codigo);
      this.cadastroForm.controls.valor.setValue(this.compra.valor);
      this.cadastroForm.controls.data.setValue(this.compra.data);
    }
  }

  get f() { return this.cadastroForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.cadastroForm.invalid) {
      return;
    }
    this.cadastroModel = new CadastroCompras();
    this.cadastroModel.codigo = this.f.codigo.value;
    this.cadastroModel.data = this.f.data.value;
    this.cadastroModel.valor = this.f.valor.value;
    this.compraService.cadastrarCompras(this.cadastroModel);
  }
}
