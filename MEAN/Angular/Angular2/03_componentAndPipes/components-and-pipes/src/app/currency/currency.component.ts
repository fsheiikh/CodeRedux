import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  value: number;
  constructor() { }

  ngOnInit() {
    this.value = 2.99;
  }
  

}
