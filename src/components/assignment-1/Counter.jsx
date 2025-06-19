"use client"

import { useState } from "react"

const Counter = () =>{
    const [value,setValue] = useState(0);
    const increment = ()=>{
        setValue(()=>value+1)
    }
    const decrement = ()=>{
        setValue(()=>value-1)
    }
    return (
        <>
            <button style={{padding:'0.6rem', fontSize:"1rem"}} onClick={decrement}>-</button>
            <div >{value}</div>
            <button style={{padding:'0.6rem', fontSize:"1rem"}} onClick={increment}>+</button>
        </>
    )
}

export default Counter;