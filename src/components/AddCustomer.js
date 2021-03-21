import React, { Component } from 'react'

export default class AddCustomer extends Component {
    state = {
        name: "",
        lastname: "",
        phone: "",
        date: new Date().toLocaleString(),
        email: ""
    };



    onNameChange (e){
        this.setState({[e.target.name] : e.target.value})
    }
    onPhoneChange (e){
        this.setState({[e.target.name] : e.target.value})
    }
    onLastnameChange (e){
        this.setState({[e.target.name] : e.target.value})
    }
    onEmailChange (e){
        this.setState({[e.target.name] : e.target.value})
    }

    onAddSubmit(e) {
        const {addCustomer,countNext} = this.props;
        const newCustomer = {
            id : countNext,
            name: this.state.name,
            lastname: this.state.lastname,
            phone: this.state.phone,
            date: this.state.date,
            email: this.state.email
        }
        addCustomer(newCustomer);
        e.preventDefault();
    }

    render() {
        const {name,lastname,email,phone} = this.state;
        return (
            <div className = "card mt-4">
                <h4 className="card-header">Add Customer Form</h4>
                <div className="card-body">
                    <form onSubmit = {this.onAddSubmit.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" placeholder="Enter name" className="form-control" value={name} onChange = {this.onNameChange.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Lastname</label>
                            <input type="text" name="lastname" id="lastname" placeholder="Enter lastname" className="form-control" value={lastname} onChange = {this.onLastnameChange.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Phone</label>
                            <input type="text" name="phone" id="phone" placeholder="Enter phone" className="form-control" value={phone} onChange = {this.onPhoneChange.bind(this)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>

                            <input type="email" name="email" id="email" placeholder="Enter email" className="form-control" value={email} onChange = {this.onEmailChange.bind(this)}/>
                        </div>
                        <button type="submit" className="btn btn-danger btn-block" value="Add suer">Add Customer</button>
                    </form>
                </div>
            </div>
        )
    }
}
