import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import { getAllApplicants, getAllPosts, getAllServices } from '../api/api'

export default class index extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     applicants: [],
  //     posts: [],
  //     services: [],
  //     name: ''
  //   }
  // }

  // async componentDidMount() {
  //   const token = await window.localStorage.getItem('token')
  //   const name = await window.localStorage.getItem('name')
  //   if(token) {
  //     const applicants = await getAllApplicants()
  //     const posts = await getAllPosts()
  //     const services = await getAllServices()
  //     this.setState({ 
  //       applicants: applicants.info, 
  //       posts: posts.info, 
  //       services: services.info, 
  //       name: name 
  //     })
  //   }
  //   else {
  //     this.props.history.push('/')
  //   }
  // }
    render() {
        return (
            <div>
                <div class="wrapper">

              <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                  </li>
                  <li class="nav-item d-none d-sm-inline-block">
                    <a href="index3.html" class="nav-link">Home</a>
                  </li>
                  <li class="nav-item d-none d-sm-inline-block">
                    <a href="#" class="nav-link">Contact</a>
                  </li>
                </ul>

                <form class="form-inline ml-3">
                  <div class="input-group input-group-sm">
                    <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                    <div class="input-group-append">
                      <button class="btn btn-navbar" type="submit">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>

              </nav>

              <aside class="main-sidebar sidebar-dark-primary elevation-4">
                <a href="/admindashboard" class="brand-link">
                  <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
                      style={{opacity: " .8"}}/>
                  <span class="brand-text font-weight-light">SageRocks</span>
                </a>

                <div class="sidebar">
                  <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                      <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image"/>
                    </div>
                    <div class="info">
                      {/* <a href="#" class="d-block">{this.props.name.toUpperCase()}</a> */}
                    </div>
                  </div>

                  <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                      <li class="nav-item has-treeview menu-open">
                        <a href="/admindashboard" class="nav-link active">
                          <i class="nav-icon fas fa-tachometer-alt"></i>
                          <p>
                            Dashboard
                            <i class="right fas fa-angle-left"></i>
                          </p>
                        </a>
                        
                      </li>

                      <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                          <i class="nav-icon fas fa-copy"></i>
                          <p>
                            Services
                            <i class="fas fa-angle-left right"></i>
                          </p>
                        </a>
                        <ul class="nav nav-treeview">
                          <li class="nav-item">
                            <a href="pages/layout/top-nav.html" class="nav-link">
                              <i class="far fa-circle nav-icon"></i>
                              <p>All Services</p>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="/newservice" class="nav-link">
                              <i class="far fa-circle nav-icon"></i>
                              <p>Add Service</p>
                            </a>
                          </li>
                          
                        </ul>
                      </li>
                      <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                          <i class="nav-icon fas fa-chart-pie"></i>
                          <p>
                            Blog
                            <i class="right fas fa-angle-left"></i>
                          </p>
                        </a>
                        <ul class="nav nav-treeview">
                          <li class="nav-item">
                            <a href="pages/charts/chartjs.html" class="nav-link">
                              <i class="far fa-circle nav-icon"></i>
                              <p>All post</p>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="/newpost" class="nav-link">
                              <i class="far fa-circle nav-icon"></i>
                              <p>Add new post</p>
                            </a>
                          </li>
                          
                        </ul>
                      </li>
                      <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                          <i class="nav-icon fas fa-tree"></i>
                          <p>
                            Applicants
                            <i class="fas fa-angle-left right"></i>
                          </p>
                        </a>
                        <ul class="nav nav-treeview">
                          <li class="nav-item">
                            <a href="pages/UI/general.html" class="nav-link">
                              <i class="far fa-circle nav-icon"></i>
                              <p>Pending</p>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="pages/UI/icons.html" class="nav-link">
                              <i class="far fa-circle nav-icon"></i>
                              <p>All Applicants</p>
                            </a>
                          </li>
                          
                        </ul>
                      </li>
                      <li class="nav-item has-treeview">
                        <a href="#" class="nav-link">
                          <i class="nav-icon fas fa-book"></i>
                          <p>
                            Pages
                            <i class="fas fa-angle-left right"></i>
                          </p>
                        </a>
                        <ul class="nav nav-treeview">
                          <li class="nav-item">
                            <a href="pages/examples/profile.html" class="nav-link">
                              <i class="far fa-circle nav-icon"></i>
                              <p>Profile</p>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="pages/examples/projects.html" class="nav-link">
                              <i class="far fa-circle nav-icon"></i>
                              <p>Projects</p>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="pages/examples/project-add.html" class="nav-link">
                              <i class="far fa-circle nav-icon"></i>
                              <p>Project Add</p>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="pages/examples/project-edit.html" class="nav-link">
                              <i class="far fa-circle nav-icon"></i>
                              <p>Project Edit</p>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="pages/examples/project-detail.html" class="nav-link">
                              <i class="far fa-circle nav-icon"></i>
                              <p>Project Detail</p>
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="pages/examples/contacts.html" class="nav-link">
                              <i class="far fa-circle nav-icon"></i>
                              <p>Contacts</p>
                            </a>
                          </li>
                        </ul>
                        <li class="nav-item">
                          <a href="http://github.com/otitoju" class="nav-link">
                            <i class="nav-icon fas fa-file"></i>
                            <p>Logout</p>
                          </a>
                        </li>
                      </li>
                      </ul>
                  </nav>
                </div>
              </aside>

              

              <aside class="control-sidebar control-sidebar-dark">
              </aside>
            </div>
            </div>
        )
    }
}
