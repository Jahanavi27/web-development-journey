import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  
  
  const addTask = () => {
    if (task === "") return;

    setTasks([
      ...tasks,
      {
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed =
      !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };

  const deleteTask = (indexToDelete) => {
    const updatedTasks = tasks.filter(
      (_, index) => index !== indexToDelete
    );

    setTasks(updatedTasks);
  };
  return (
    <div>
      <h1>React Todo App</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter Task"
      />
      <button onClick={addTask}>
        Add Task
      </button>
      <h3>Total Tasks: {tasks.length}</h3>
      <ul>
        {tasks.map((item, index) => (
          <li
            key={index}
            style={{
              textDecoration:
                item.completed
                  ? "line-through"
                  : "none",
            }}
          >
            {item.text}

            <button
              onClick={() => toggleTask(index)}
            >
              Complete
            </button>

            <button
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
            
    </div>
  );
}

export default App;