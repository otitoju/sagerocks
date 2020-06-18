import React, { Component } from 'react'
import Index from './index'
export default class newpost extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            content: ''
        }
    }

    async handlePost(e) {
        e.preventDefault()
        fetch('/api/v1/newpost', {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                title: this.state.title,
                content: document.getElementById('inputDescription').value
            })
        })
        .then( res => res.json())
        .then( res => {
            alert(res.message)
            console.log(res)
        })
        .catch(err => console.log(err.message))
    }
    handleTitle(e) {
        this.setState({ title: e.target.value })
    }
    handleContent(e) {
        this.setState({ content: e.target.value })
    }
    
    render() {
        return (
            <div>
                <Index />
                <div class="content-wrapper">
                    <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>New Post</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Project Add</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                    </section>

                    <section class="content">
                    <div class="row">
                        <div class="col-md-6">
                        <div class="card card-primary">
                            <div class="card-header">
                            <h3 class="card-title">General</h3>

                            <div class="card-tools">
                                <button type="button" class="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
                                <i class="fas fa-minus"></i></button>
                            </div>
                            </div>
                            <div class="card-body">
                            <div class="form-group">
                                <label for="inputName">Title</label>
                                <input type="text" id="inputName" class="form-control" value={this.state.title} onChange={this.handleTitle.bind(this)}/>
                            </div>
                            <div class="form-group">
                                <label for="inputDescription">Content</label>
                                <textarea id="inputDescription" class="textarea form-control" rows="8" value={this.state.content} onChange={this.handleContent.bind(this)}></textarea>
                                {/* <textarea id="inputDescription" class="form-control" rows="4" value={this.state.content} onChange={this.handleContent.bind(this)}></textarea> */}
                            </div>
                            <div class="form-group">
                                <label for="inputName">Image</label>
                                <input type="file" id="inputName" class="form-control"/>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    <div class="row">
                        <div class="col-12">
                        <input type="submit" value="Create new Post" class="btn btn-success float-left" onClick={this.handlePost.bind(this)}/>
                        </div>
                    </div>
                    </section>
                </div>
            </div>
        )
    }
}
