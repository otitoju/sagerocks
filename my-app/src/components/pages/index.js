import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class index extends Component {
  // constructor() {
  //   super()
  //   this.state = {

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

                <ul class="navbar-nav ml-auto">
                  <li class="nav-item dropdown">
                    <a class="nav-link" data-toggle="dropdown" href="#">
                      <i class="far fa-comments"></i>
                      <span class="badge badge-danger navbar-badge">3</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                      <a href="#" class="dropdown-item">
                        <div class="media">
                          <img src="dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle"/>
                          <div class="media-body">
                            <h3 class="dropdown-item-title">
                              Brad Diesel
                              <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                            </h3>
                            <p class="text-sm">Call me whenever you can...</p>
                            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                          </div>
                        </div>
                      </a>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item">
                        <div class="media">
                          <img src="dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"/>
                          <div class="media-body">
                            <h3 class="dropdown-item-title">
                              John Pierce
                              <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                            </h3>
                            <p class="text-sm">I got your message bro</p>
                            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                          </div>
                        </div>
                      </a>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item">
                        <div class="media">
                          <img src="dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"/>
                          <div class="media-body">
                            <h3 class="dropdown-item-title">
                              Nora Silvester
                              <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                            </h3>
                            <p class="text-sm">The subject goes here</p>
                            <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                          </div>
                        </div>

                      </a>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
                    </div>
                  </li>

                  <li class="nav-item dropdown">
                    <a class="nav-link" data-toggle="dropdown" href="#">
                      <i class="far fa-bell"></i>
                      <span class="badge badge-warning navbar-badge">15</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                      <span class="dropdown-item dropdown-header">15 Notifications</span>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item">
                        <i class="fas fa-envelope mr-2"></i> 4 new messages
                        <span class="float-right text-muted text-sm">3 mins</span>
                      </a>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item">
                        <i class="fas fa-users mr-2"></i> 8 friend requests
                        <span class="float-right text-muted text-sm">12 hours</span>
                      </a>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item">
                        <i class="fas fa-file mr-2"></i> 3 new reports
                        <span class="float-right text-muted text-sm">2 days</span>
                      </a>
                      <div class="dropdown-divider"></div>
                      <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
                    </div>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                      <i class="fas fa-th-large"></i>
                    </a>
                  </li>
                </ul>
              </nav>

              <aside class="main-sidebar sidebar-dark-primary elevation-4">
                <a href="index3.html" class="brand-link">
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
                      <a href="#" class="d-block">John Max</a>
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
                            <h3>23</h3>

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
                            <h3>40</h3>

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
                            <h3>15</h3>

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
                            <h3>9</h3>

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

              <aside class="control-sidebar control-sidebar-dark">
              </aside>
            </div>
            </div>
        )
    }
}
