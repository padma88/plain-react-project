import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        post: null,
        isLoading: false
    }
    componentDidMount () {
        this.loadData();
    }
    componentDidUpdate () {
        this.loadData();        
    }
    loadData () {
        if (this.props.match.params.id) {
            if (!this.state.post || (this.state.post &&  this.state.post.id !== +this.props.match.params.id) ) {
                // this.setState({
                //     isLoading: true
                // })
                axios.get('/posts/' + this.props.match.params.id).then(response => {
                    this.setState({
                        post: response.data,
                        isLoading: false
                    })
                })
            }
        }
    }
    deletePost = () => {
        axios.delete('/posts/' + this.props.match.params.id).then(response => {
            this.setState({
                post: response.data
            })
        })
    }
    render () {
        let post = this.state.isLoading 
                ? <p style={{textAlign:'center'}}>Loading...</p> 
                : <p style={{textAlign:'center'}}>Please select a Post!</p>;
        if (this.state.post && this.props.match.params.id) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePost}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;