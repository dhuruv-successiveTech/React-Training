"use client"

import { useState } from "react"

export const Counter = () =>{
    const [value,setValue] = useState(0);
    const increment = ()=>{
        setValue(()=>value+1)
    }
    const decrement = ()=>{
        setValue(()=>value-1)
    }
    return (
        <div className="counter">
            <button className="increment" onClick={decrement}>-</button>
            <div className="">{value}</div>
            <button className="decrement" onClick={increment}>+</button>
        </div>
    )
}