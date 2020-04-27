import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions'

class Posts extends Component {
    // no longer needed bcos of redux
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         posts: []
    //     }
    // }
    //no longer needed bcos of redux
    // componentWillMount() {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then((res) => {
    //             //console.log(res)
    //             return res.json()
    //         })
    //         .then((data) => {
    //             //console.log(data)
    //             return this.setState({
    //                 posts: data
    //             })
    //         })
    // }

    // needed now to get post from redux store
    componentWillMount() {
        //console.log(this.props.fetchPosts())
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        }
    }
    render() {
        console.log(this.props.posts)
        const postItems = this.props.posts.map((post) =>
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        )
        return (
            <div>
                <h1>Post</h1>
                {postItems}
            </div>
        )
    }
}



// Posts.prototype = {
//     fetchPosts: PropTypes.func.isRequired,
//     posts: PropTypes.array.isRequired
// }


// const mapStateToProps = (state) => {
//     return { posts: state.posts.items }
// }

const mapStateToProps = state => ({
    posts: state.posts.items, //the key posts is from reducer/index.js and we want items from our reducer
    newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts)

//export default Posts
