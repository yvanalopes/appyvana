import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Revendedor } from "../models/revendedor.class";

@Injectable({ providedIn: 'root' })
export class RevendedorService {

  constructor(private http: HttpClient) {

  }

  cadastrarRevendedor(revendedor: Revendedor) {
      console.log(revendedor);
  }
}