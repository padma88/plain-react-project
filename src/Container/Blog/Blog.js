import React, { Component, Suspense } from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';

const NewPost = React.lazy(() => import ('./NewPost/NewPost'));

class Blog extends Component {
    state = {
        auth: true
    }
    componentDidMount () {
        console.log(this.props);
    }
    render () {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to='/posts/' exact activeClassName='my-active'>Posts</NavLink>
                            </li>
                            <li>
                                <NavLink exact to={
                                    {pathname:'/new-post',
                                    hash:'#submit',
                                    search:'?quick-submit=true'}}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Route path='/posts' component={Posts}/>
                <Route path='/new-post' render={() => (
                    <Suspense fallback={<div>Loading...</div>}>
                        <NewPost/>
                    </Suspense>
                )}/>
                {/* <Route render={() => <h1>Not Found</h1>}/> */}
                <Redirect from='/' to='/posts' />
            </div>
        );
    }
}

export default Blog;