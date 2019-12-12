import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators'
import { CadastroCompras } from '../models/cadastroCompras.model'
import { Observable } from "rxjs";
import { Compra } from '../models/compra.model';

@Injectable({ providedIn: 'root' })
export class CompraService {

  public compra: Compra[];
  public modelCompra: Compra;

  constructor(private http: HttpClient) {
    this.compra = [{ codigo: 1, valor: "15", data: new Date(), cashback: 30, percentageCashback: 2, status: "emValidacao" },
    { codigo: 2, valor: "15", data: new Date(), cashback: 30, percentageCashback: 2, status: "reprovado" },
    { codigo: 3, valor: "15", data: new Date(), cashback: 30, percentageCashback: 2, status: "reprovado" },
    { codigo: 4, valor: "15", data: new Date(), cashback: 30, percentageCashback: 2, status: "emValidacao" },
    { codigo: 5, valor: "15", data: new Date(), cashback: 30, percentageCashback: 2, status: "aprovado" },
    { codigo: 6, valor: "15", data: new Date(), cashback: 30, percentageCashback: 2, status: "aprovado" }];

    this.modelCompra = new Compra();
  }

  cadastrarCompras(cadastroCompras: CadastroCompras) {
    //this.http.post<CadastroCompras>("urlApi", cadastroCompras).pipe(map(compra => {
    //  return compra
    //}));
    console.log(cadastroCompras);
  }

  editar(index) {
    this.modelCompra = this.compra[index];
  }

  excluir(index) {
    this.compra.splice(index, 1);
    console.log(this.compra);
  }

  findCompras(): Compra[] {

    //this.http.get<Compra[]>("urlApi").pipe(map(compra => {
    //return compra;
    //}));

    return this.compra;
  }
}