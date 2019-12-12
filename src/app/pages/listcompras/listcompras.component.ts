import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Compra } from 'src/app/models/compra.model';
import { CompraService } from 'src/app/services/compras.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listcompras',
  templateUrl: './listcompras.component.html',
  styleUrls: ['./listcompras.component.css']
})
export class ListComprasComponent implements OnInit {

  listaCompras: Compra[] = [];

  constructor(private compraService: CompraService, private router: Router) { }

  ngOnInit() {
    this.getListaCompras();
  }

  getListaCompras(){
    console.log(this.compraService.findCompras());
    this.listaCompras = this.compraService.findCompras();
  }

  editar(index) {
    this.compraService.editar(index);
    this.router.navigate(['cadastrocompras']);
  }

  excluir(index) {
    this.compraService.excluir(index);
    this.getListaCompras();
  }
}

@Pipe({name: 'statusPipe'})
export class StatusPipe implements PipeTransform {
  transform(value: string): string {
    if(value === "emValidacao"){
      return "Em Validação";
    }
    else if(value === "reprovado"){
      return "Reprovado";
    }
    else if(value === "aprovado"){
      return "Aprovado";
    }
    else{
      return "Status Invalido!"
    }
  }
}