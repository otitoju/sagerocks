import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAllApplicants } from '../api/api'
import Index from './index'
export default class applicants extends Component {
    constructor() {
        super()
        this.state = {
          applicants: [],
          
        }
      }
    
      async componentDidMount() {
        const applicants = await getAllApplicants()
        this.setState({ 
          applicants: applicants.info
        })
      }
    render() {
        return (
            <div>
                <index />
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">All Applicants</h3>

                            <div class="card-tools">
                            <div class="input-group input-group-sm" style={{width: "150px"}}>
                                <input type="text" name="table_search" class="form-control float-right" placeholder="Search"/>

                                <div class="input-group-append">
                                <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="card-body table-responsive p-0" style={{height: "300px"}}>
                            <table class="table table-head-fixed text-nowrap">
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>CV</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.state.applicants ? this.state.applicants.map( (index, applicant) => {
                                    return <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{applicant.name}</td>
                                    <td>{applicant.date}</td>
                                    <td><span class="tag tag-success">{applicant.approved}</span></td>
                                    <td>{applicant.cv}</td>
                                    <td><button className="btn btn-primary">Approve</button> / <button className="btn btn-danger">Del</button></td>
                                    </tr>
                                }) : (
                                    <h3>No applicants yet!!</h3>
                                )}
                                
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
