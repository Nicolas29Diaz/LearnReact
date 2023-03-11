import React from "react";
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const { createNewTask } = useContext(TaskContext);

  const handleSumbit = (e) => {
    e.preventDefault();
    if (taskTitle == "") {
      alert("Por favor ingrese el titulo");
    } else if (taskDesc == "") {
      alert("Por favor ingrese la descripción");
    } else {
      createNewTask(taskTitle, taskDesc);
      setTaskTitle("");
      setTaskDesc("");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSumbit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Añadir tareas</h1>
        <input className="bg-slate-300 p-3 w-full mb-2"
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Escribe tu tarea"
          type="text"
          value={taskTitle}
        />
        <textarea className="bg-slate-300 p-3 w-full mb-2"
          onChange={(e) => setTaskDesc(e.target.value)}
          placeholder="Descripcion"
          type="text"
          value={taskDesc}
        />
        <button className="bg-indigo-500 px-2 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
