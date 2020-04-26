import React, { useState,useEffect } from 'react'

function IntervalHookCounter() {

    const [count, setcount] = useState(0)
    
    const tick = () =>{
        setcount(count + 1)
    }
    useEffect(() => {
        const interval = setInterval(tick,1000)
        return () => {
            clearInterval(interval)
        }
    }, [count])

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter