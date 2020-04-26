import React,{useState} from 'react'

function HookCounterTwo() {
    const initialState = 0;
    const [count, setcount] = useState(initialState)
    return (
        <div>
            Count : {count}
            <button onClick={()=>setcount(prevState => prevState-prevState)}>Reset</button>
            <button onClick={()=>setcount(prevState => prevState -1)}>Decrement</button>
            <button onClick={()=>setcount(prevState => prevState +1)}>Increment</button>
        </div>
    )
}

export default HookCounterTwo
