"use server"
import { datos } from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function addTodo(formData:FormData) {
    datos.push({id: Date.now(), title: `${formData.get("nuevoTodo")}`, completed: false})
    
    revalidatePath("/")
}

export async function deleteTodo(id: number) {
    const index = datos.findIndex(t => t.id === id);
    if (index !== -1) {
        datos.splice(index, 1); // Borra 1 elemento en esa posición
    }
    revalidatePath("/") // Refresca la lista para que desaparezca visualmente
}