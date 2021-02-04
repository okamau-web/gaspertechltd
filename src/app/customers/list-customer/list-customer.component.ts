import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
customerResult:any; 
customerList:any;
  constructor(private customerservice: CustomerService) { }

  ngOnInit(): void {
    this.getCustomerList();
  }
  getCustomerList() {
    this.customerservice.getCustomers().subscribe((data: any[]) => {
this.customerResult = data;
this.customerList=this.customerResult.results;
// console.log(this.customerList)
    })
  }

}
