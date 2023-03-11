import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  const [state, setState] = useState(true);
  const [stateText, setStateText] = useState("Pendiente");
  const [cssDesc,setCssDesc] = useState("black")
  const [cssState, setCssState] = useState(500);
  const changeState = () => {
    setState((prevState) => (prevState = !prevState));
    if (state) {
      setCssState(800);
      setStateText("Hecha")
      setCssDesc("gray-500")
    } else {
      setCssState(500);
      setStateText("Pendiente")
      setCssDesc("black")
    }

  };

  return (
    <div className={`bg-gray-${cssState} text-white p-3 rounded-md`}>
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className={`text-${cssDesc} text-sm`}>{task.description}</p>
      <div className="grid grid-cols-2 gap-2">
        <button
          className="bg-red-500 px-4 py-1 rounded-md mt-4 hover:bg-red-400"
          onClick={() => deleteTask(task.id)}
        >
          Eliminar
        </button>
        <button
          className="bg-green-900 px-4 py-1 rounded-md mt-4 hover:bg-red-400 text-center"
          onClick={changeState}
        >
          {stateText}
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
