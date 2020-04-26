import React, { Component } from 'react'
import Axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            console.log(response);
            this.setState({
                posts: response.data
            })
        }).then(error => {
            console.log(error)
        })
    }

    render() {
        const { posts } = this.state
        return (
            <div>
                {
                    posts.map(post => <div key={post.id}>{post.title}</div>)
                            }
            </div>
        )
    }
}

export default PostList
