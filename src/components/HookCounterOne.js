import React, {useState, useEffect} from 'react'

function HookCounterOne() {
const initialState = 0;
    const [count, setCount] = useState(initialState)
    const [name, setName] = useState('')

    useEffect(()=>{
        document.title = `Clicked ${count} times`
        console.log('Use Effect - document title updated')
    },[count])
    return (
        <div>
            <input type='text' onChange={e => setName(e.target.value)} value={name}></input>
            <button onClick={()=>setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne
