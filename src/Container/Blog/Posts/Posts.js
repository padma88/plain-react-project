import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../../Components/Post/Post';
import './Posts.css';
import FullPost from './FullPost/FullPost';
import { Redirect, Route } from 'react-router-dom';

class Posts extends Component {
    state = {
        posts: [],
        post: null,
        id: ''
    }
    componentDidMount () {
        console.log(this.props);
        axios.get('/posts').then(response => {
            this.setState({
                posts: response.data.slice(0, 4)
            })
        })
    }
    postSelected = (postId) => {
        // this.props.history.push({pathname: '/' + postId});
        this.props.history.push('/posts/' + postId);
    }
    render () {
        <Redirect to='/posts/:id'/>
        const postList = this.state.posts;
        const posts = this.state.posts.length > 0 ? postList.map(post => {
            return <Post 
                key={post.id} 
                post={post} 
                {...this.props}
                clicked={() => this.postSelected(post.id)}/> 
        }) : null;
        return (
            <div>
                <section className='Posts'>
                    {posts}
                </section>              
                <Route path={this.props.match.url+ '/:id'} exact component={FullPost}/>
            </div>
        );
    }
}
export default Posts;