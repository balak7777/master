import React,{useEffect,useState} from 'react'

function HookMouse() {

    const [x, setx] = useState(0)
    const [y, sety] = useState(0)

    const mouseMoved = e => {
        console.log("mouseMove Called")
        setx(e.clientX)
        sety(e.clientY)
    }
    useEffect(() => {
        console.log("useEffect Called")
     window.addEventListener('mousemove',mouseMoved)   
     return(()=>{
            console.log("Component unmount")
            window.removeEventListener('mousemove',mouseMoved)
     })
    },[])
    return (
        <div>
            X : {x} Y : {y}
        </div>
    )
}

export default HookMouse
