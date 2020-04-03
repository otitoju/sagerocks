import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Contact from './components/pages/contact'
import Dashboard from './components/pages/index'
import Login from './components/pages/login'
import Register from './components/pages/register'
import newPost from './components/pages/newpost'
import NewService from './components/pages/newservice'

export default class router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/admindashboard" strict exact={true} component={Dashboard}/>
                    <Route path="/" strict exact={true} component={Login}/>
                    <Route path="/register" strict exact={true} component={Register}/>
                    <Route path="/newpost" strict exact={true} component={newPost}/>
                    <Route path="/newservice" strict exact={true} component={NewService}/>
                    <Route path="/contact" strict exact={true} component={Contact}/>
                </Switch>
            </div>
        )
    }
}
