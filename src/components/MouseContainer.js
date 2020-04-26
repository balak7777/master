import React,{useState} from 'react'
import HookMouse from './HookMouse'

function MouseContainer() {

    const [display, setdisplay] = useState(true)


    return (
        <div>
            <button name="toggle" onClick={
                ()=>setdisplay(!display)
            }>toggle name</button>
            {display && <HookMouse/>}
        </div>
    )
}

export default MouseContainer
