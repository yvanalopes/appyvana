import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cashback } from '../models/cashback.model';

@Injectable({ providedIn: 'root' })
export class CashbackService {

  constructor(private http: HttpClient) {
   
  }

  findCashback() : Cashback{
    return {
        nome: 'Yvana Danielle Lopes',
        email: 'yvanadlopes@gmail.com',
        telefone: '(31) 99748-3575',
        foto: 'assets/images/profile.jpg',
        valor: 'R$ 299,99'
    };
  }
}