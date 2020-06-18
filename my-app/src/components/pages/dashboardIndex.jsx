import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAllApplicants, getAllPosts, getAllServices } from '../api/api'
import Index from './index'

export default class dashboardIndex extends Component {
    constructor() {
        super()
        this.state = {
          applicants: [],
          posts: [],
          services: [],
          name: ''
        }
      }
    
      async componentDidMount() {
        const token = await window.localStorage.getItem('token')
        const name = await window.localStorage.getItem('name')
        if(token) {
          const applicants = await getAllApplicants()
          const posts = await getAllPosts()
          const services = await getAllServices()
          this.setState({ 
            applicants: applicants.info, 
            posts: posts.info, 
            services: services.info, 
            name: name 
          })
        }
        else {
          this.props.history.push('/')
        }
      }
    render() {
        return (
            <div>
                <Index name={this.state.name}/>
                <div class="content-wrapper">
                <div class="content-header">
                  <div class="container-fluid">
                    <div class="row mb-2">
                      <div class="col-sm-6">
                        <h1 class="m-0 text-dark">Dashboard</h1>
                      </div>
                      <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                          <li class="breadcrumb-item"><a href="#">Home</a></li>
                          <li class="breadcrumb-item active">Dashboard</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                <section class="content">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-lg-3 col-6">
                        <div class="small-box bg-info">
                          <div class="inner">
                            <h3>{this.state.applicants.length}</h3>

                            <p>Pending Applicants</p>
                          </div>
                          <div class="icon">
                            <i class="ion ion-bag"></i>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-6">
                        <div class="small-box bg-success">
                          <div class="inner">
                          <h3>{this.state.applicants.length}</h3>

                            <p>All Inquiries</p>
                          </div>
                          <div class="icon">
                            <i class="ion ion-stats-bars"></i>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-6">
                        <div class="small-box bg-warning">
                          <div class="inner">
                            <h3>{this.state.posts.length}</h3>

                            <p>Total Post</p>
                          </div>
                          <div class="icon">
                            <i class="ion ion-person-add"></i>
                          </div>
                        </div>
                      </div>

                      <div class="col-lg-3 col-6">
                        <div class="small-box bg-danger">
                          <div class="inner">
                            <h3>{this.state.services.length}</h3>

                            <p>Total Services</p>
                          </div>
                          <div class="icon">
                            <i class="ion ion-pie-graph"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </section>
              </div>
            </div>
        )
    }
}

