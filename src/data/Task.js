
export const tasks = [
  { id: 0, title: "Tarea 1", description: "Mi primer tarea" },
  { id: 1, title: "Tarea 2", description: "Mi segunda tarea" },
  { id: 2, title: "Tarea 3", description: "Mi tercera tarea" },
  { id: 3, title: "Tarea 4", description: "Mi cuarta tarea" },
];


export function updateTasks(newTask){
  tasks.push(newTask)
  console.log(tasks)
}
