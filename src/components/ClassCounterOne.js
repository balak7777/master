import React, { Component } from 'react'

class ClassCounterOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name : ""
        }
    }
    componentDidMount() {
        
    }
    
    render() {
        return (
            <div>
                <input type="text" onChange={e => this.setState({
                    name : e.target.value
                })} value={this.state.name}></input>
                <button onClick={() => this.setState({
                    count: this.state.count + 1
                })}>Increment</button>
            </div>
        )
    }
}

export default ClassCounterOne
