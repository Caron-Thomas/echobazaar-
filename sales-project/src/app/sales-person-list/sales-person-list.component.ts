import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent implements OnInit {
  //create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Anup', 'Kamar', 'anup.kamar@teste.com', 50000),
    new SalesPerson('John', 'Doe', 'jd@teste.com', 40000),
    new SalesPerson('Claire', 'Murphy', 'claire@hemma.com', 90000),
    new SalesPerson('Mai', 'Trung', 'mai.trung@teste.com', 60000),
  ];

  constructor() {}

  ngOnInit(): void {}
}
