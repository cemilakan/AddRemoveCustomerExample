import React, { Component } from 'react'

export default class Customer extends Component {
    onDeleteClick(id,e) {
        const {deleteCustomer} = this.props
        deleteCustomer(id)
    }
    render() {
        const {id,name,email,lastname,phone,date} = this.props;
        return (
            <tr>
                <th>{id}</th>
                <td>{name}</td> 
                <td>{lastname}</td> 
                <td>{phone}</td>
                <td>{email}</td>
                <td>{date}</td>
                <td><button onClick= {this.onDeleteClick.bind(this,id)} className="btn btn-danger btn-block">Delete</button></td>
            </tr>
        )
    }
}
