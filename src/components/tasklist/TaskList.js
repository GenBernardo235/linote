import { useState } from "react";
import "./tasklist.css";

import { FaTrash } from "react-icons/fa";

export default function TaskList({ tasks, handleUpdate, handleDelete }) {
  return (
    <div className="tlist">
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

function Task({ task, handleUpdate, handleDelete }) {
  const [currentTask, setTask] = useState(task);
  const mark = () => {
    setTask({ ...currentTask, done: !currentTask.done });
    handleUpdate(task.id, currentTask);
  };
  return (
    <div className={currentTask.done ? "t done" : "t undone"}>
      <p>{currentTask.text}</p>
      <div className="t-actions">
        <p>{task.category}</p>
        <FaTrash size={18} onClick={() => handleDelete(currentTask.id)} />
        <input
          type="checkbox"
          id="isdone"
          name="isdone"
          checked={currentTask.done}
          onClick={mark}
        />
      </div>
    </div>
  );
}
