import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Estudar programação",
      day: "15 de julho ás 10:00",
      remider: true,
    },
    {
      id: 2,
      text: "Fazer compras",
      day: "15 de julho ás 10:00",
      remider: true,
    },
    {
      id: 3,
      text: "Ler um livro ",
      day: "15 de julho ás 10:00",
      remider: true,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="textl-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
