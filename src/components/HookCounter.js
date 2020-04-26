import React, {useState} from 'react'


function HookCounter() {

    const [count, setcount] = useState(0);
    clickCounter =() =>{
        setcount(count + 1)
    }
    return (
        <div>
            <button onClick={this.clickCounter}>Count {count}</button>
        </div>
    )
}

export default HookCounter
