import React, { Component } from 'react'
import Customer from './Customer';

export default class Customers extends Component {

    render() {
        const {customers, deleteCustomer} = this.props;
        return (
            <div>
                <table className="table table-dark">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Lastname</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Date</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map(customer => {
                            const {id,name,lastname,phone,email,date} = customer;
                            return <Customer 
                                key = {id}
                                id = {id}
                                name = {name}
                                lastname = {lastname}
                                phone = {phone}
                                email = {email}
                                date = {date}
                                deleteCustomer = {deleteCustomer}
                            />
                        })
                    }
                </tbody>
                </table>
            </div>
        )
    }
}
