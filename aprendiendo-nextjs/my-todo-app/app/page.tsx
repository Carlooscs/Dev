import{ datos } from "../lib/db"
import ButtonCompleted from "./components/ButtonCompleted";
import {addTodo , deleteTodo} from "./actions"
import SubmitButton from "./components/SubmitButton";
import Image from "next/image";
export default function Home() {
	return (
	<div className="flex items-center  min-h-screen bg-zinc-50 font-sans">
		<main className="flex items-center  min-h-screen w-full  flex-col px-16 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
			<h1 className="text-4xl">My Todo App</h1>
			<p className="text-3xl">Simple todo app built with Next.js</p>
				
			<div className="px-16 py-5 flex flex-col bg-white/30 backdrop-blur-md border border-white/20 p-10 rounded-2xl shadow-xl">
				<h2 className="flex items-center justify-center mb-10 text-5xl ">Todo List</h2>

					<form 
						className="flex flex-auto  p-2 w-full mb-10 justify-between " 
						action={addTodo}
						>
						<input 
							type="text" 
							name="nuevoTodo" 
							placeholder="Apunta un nuevo TODO" 
							className=" bg-white/30 p-2 rounded-2xl text-black text-bold"
							required // Añade esto para evitar tareas vacías
						/>
						<SubmitButton />
					</form>
					
					<ul className="flex flex-col ">	
					{datos.map((todo) => (
						<li key={todo.id} className= "bg-white/60 mb-2 w-full p-2 rounded font-bold gap-4 text-xl text-black flex items-center justify-between">
							<p className="flex-1 items-center gap-3">{todo.title}</p> 

							<div className="flex items-center gap-3">
								<ButtonCompleted completed={todo.completed}/>

								<form action={deleteTodo.bind(null, todo.id)}>
									<button type="submit" className="cursor-pointer hover:scale-110 transition-transform ">
										🗑️
									</button>
								</form>
							</div>
							
						</li>
					))}
						
					</ul>
			</div>
		</main>
	</div>
);
}
