import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

export default class login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            redirect: false
        }
    }

    async handleLogin(e) {
        e.preventDefault()
        fetch('http://localhost:5000/login', {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then( res => res.json())
        .then( res => {
            console.log(res)
            if(res.message == 'successful'){
                this.setState({ redirect: true })
            }
            else{
                alert(res.message)
            }
        })
        .catch(err => console.log(err.message))
    }
    handleEmail(e) {
        this.setState({ email: e.target.value })
    }
    handlePassword(e) {
        this.setState({ password: e.target.value })
    }

    render() {
        if(!this.state.redirect) {
        return (
            <div class="hold-transition login-page">
                <div class="login-box">
                <div class="login-logo">
                    <a href="../../index2.html"><b>Sage</b>ROCKS</a>
                </div>
                <div class="card">
                    <div class="card-body login-card-body">
                    <p class="login-box-msg">Sign in</p>

                    <form action="../../index3.html" method="post">
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
                        <div class="col-8">
                            <div class="icheck-primary">
                            <input type="checkbox" id="remember"/>
                            <label for="remember">
                                Remember Me
                            </label>
                            </div>
                        </div>
                        <div class="col-4">
                            <button type="submit" class="btn btn-primary btn-block" onClick={this.state.handleLogin.bind(this)}>Sign In</button>
                        </div>
                        </div>
                    </form>

                    <p class="mb-0">
                        <Link to='/register' class="text-center">Register a new admin</Link>
                    </p>
                    </div>
                </div>
                </div>

            </div>
        )
        }
        else {
            <Redirect to="/admindashboard" />
        }
    }
}
