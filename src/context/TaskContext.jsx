import { createContext, useState, useEffect } from "react";
import { tasks as dataTasks } from "../data/Task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [idTasks, setIdTasks] = useState(4);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(dataTasks);
  }, []);

  function createNewTask(newTitle, newDesc) {
 
    const newTask = {
      id: idTasks,
      title: newTitle,
      description: newDesc,
    };
    setTasks([...tasks, newTask]);
    setIdTasks(prevId => prevId + 1)
  }


  function deleteTask(taskId) {
    // const deletedTask = tasks.find((n) => n.id === taskId);
    setTasks(tasks.filter((i) => i.id !== taskId));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createNewTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
