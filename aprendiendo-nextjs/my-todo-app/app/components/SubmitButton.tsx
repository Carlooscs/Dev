"use client"

import { useFormStatus } from "react-dom"

export default function SubmitButton(){

    const {pending} = useFormStatus()

    return (
        <button 
            disabled={!!pending}
            type="submit"
            className={`className="bg-blue-500 p-2 text-bold text-black rounded hover:bg-blue-500 transition-all duration-300 ease-in-out" ${pending ? "bg-gray-400" : "bg-gray-300"}`}
            >
            {pending ? "Añadiendo..." : "Añadir"}
        </button>
    )
}