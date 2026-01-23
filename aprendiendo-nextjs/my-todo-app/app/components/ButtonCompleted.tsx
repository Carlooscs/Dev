"use client"
import { useState } from "react";

export default function ButtonCompleted({completed}: {completed: boolean}){
    const [completado, setCompleted] = useState(completed)

    const handleClick = () => {setCompleted(!completado)}
    

    return (
        <button onClick={handleClick} className="transition-transform hover:scale-110 border-2 rounded-md cursor-pointer transition-colors hover:bg-gray-200">
            {!completado ? "❌" : "✅"}
        </button>
    )

}