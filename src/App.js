import React, { Component } from 'react'
import AddCustomer from './components/AddCustomer';
import Customers from './components/Customers';
import customersData from './components/customers.json';

export default class App extends Component {
  addCustomer(newCustomer) {
    let updateCustomers = this.state.customers;
    updateCustomers.push(newCustomer);
    this.setState(
      {
        customers: updateCustomers
      }
    )
  }
  deleteCustomer(id) {
    let updatedCustomers = this.state.customers;
    updatedCustomers = updatedCustomers.filter(customer => customer.id !== id)
    this.setState({
      customers: updatedCustomers
    })
  }
  constructor(props) {
    super(props)
    
    this.state = {
      customers: customersData
    }
    this.deleteCustomer = this.deleteCustomer.bind(this)
    this.addCustomer = this.addCustomer.bind(this)
  }
  render() {
    return (
      <div className = "container">
        <AddCustomer addCustomer ={this.addCustomer} countNext = {this.state.customers.length + 1} /*İstenirse random id eklenebilir veya listenin içinde olmayan bir id taranarak eklenebilir*/></AddCustomer>
        <hr></hr>
        <Customers deleteCustomer = {this.deleteCustomer} customers= {this.state.customers}></Customers>
      </div>
    )
  }
}

