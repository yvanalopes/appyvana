import { Component, OnInit } from '@angular/core';
import { CashbackService } from 'src/app/services/cashback.service';
import { Cashback } from 'src/app/models/cashback.model';

@Component({
  selector: 'app-cashbackpage',
  templateUrl: './cashbackpage.component.html',
  styleUrls: ['./cashbackpage.component.css']
})
export class CashbackpageComponent implements OnInit {

  constructor(private cashbackService: CashbackService) { }

  cashback: Cashback;

  ngOnInit() {
    this.cashback = this.cashbackService.findCashback();
  }

}
