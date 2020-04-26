import React, { Component } from 'react'
import Axios from 'axios'

class PostForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userId : "",
             title : "",
             body : ""
        }
    }
    changeHandler = e =>{   
        this.setState({
            [e.target.name] : e.target.value

        })
    }
    submitHandler = e =>{
        e.preventDefault()
        console.log(this.state);
        Axios.post("https://jsonplaceholder.typicode.com/posts",this.state).then(response => {
            console.log(response);
        }).catch(error =>{
            console.log(error);
        })
        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                    User id : <input type="text" name = "userId" onChange={this.changeHandler} value={this.userId}></input>
                    </div>
                    <div>
                    Title : <input type="text" name = "title" onChange={this.changeHandler} value={this.title}></input>
                    </div>
                    <div>
                    Body : <input type="text" name = "body" onChange={this.changeHandler} value={this.body}></input>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm
