import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class register extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    async handleRegister(e) {
        e.preventDefault()
        fetch('http://localhost:5000/register', {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
        .then( res => res.json())
        .then( res => {
            alert(res.message)
            console.log(res)
        })
        .catch(err => console.log(err.message))
    }
    handleEmail(e) {
        this.setState({ email: e.target.value })
    }
    handlePassword(e) {
        this.setState({ password: e.target.value })
    }
    handleName(e) {
        this.setState({ name: e.target.valuee })
    }
    render() {
        return (
            <div class="hold-transition register-page">
                <div class="register-box">
                <div class="register-logo">
                    <a href="../../index2.html"><b>Sage</b>ROCKS</a>
                </div>

                <div class="card">
                    <div class="card-body register-card-body">
                    <p class="login-box-msg">Register a new Admin</p>

                    <form action="../../index.html" method="post">
                        <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Full name" value={this.state.name} onChange={this.handleName.bind(this)}/>
                        <div class="input-group-append">
                            <div class="input-group-text">
                            <span class="fas fa-user"></span>
                            </div>
                        </div>
                        </div>
                        <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Email" value={this.state.email} onChange={this.handleEmail.bind(this)}/>
                        <div class="input-group-append">
                            <div class="input-group-text">
                            <span class="fas fa-envelope"></span>
                            </div>
                        </div>
                        </div>
                        <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Password" value={this.state.password} onChange={this.handlePassword.bind(this)}/>
                        <div class="input-group-append">
                            <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                            </div>
                        </div>
                        </div>
                        
                        <div class="row">
                        <div class="col-4">
                            <button type="submit" class="btn btn-primary btn-block" onClick={this.handleRegister.bind(this)} >Register</button>
                        </div>
                        </div>
                    </form>

                    <Link to='/' class="text-center">I already have a membership</Link>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
