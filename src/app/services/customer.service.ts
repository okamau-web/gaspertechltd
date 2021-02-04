import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.dev';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url ='http://localhost:3000/customers/list'

  constructor(private http: HttpClient) { }
  getCustomers() {
  //  let url = environment.CUSTOMER_BASE_URL+environment.CUSTOMER.GET_ALL_CUSTOMERS;
  //   return this.http.get<any>(url)
    return this.http.get<any>(this.url);
  }
  viewCustomer(id) {

  }
  editCustomer(id, Customer) {

  }
  deleteCustomer(id) {

  }

  searchCustomer(keyword) {

  }

}
