import { useState } from "react";
import './css/ToDoList.css';
function ToDoList() 
{
    const[tasks, setTask] = useState([]);
    const[input, setInput] = useState("");

    const addTask = () => {
        if(input.trim() === "") return;
        setTask([...tasks, { text: input, completed: false}]);
            setInput("");    
    };

    const toggleTask = (index) => {
        const updatedTask = [...tasks];
        updatedTask[index].completed = !updatedTask[index].completed;
        setTask(updatedTask);
    };
        const deleteTask = (index) => {
    setTask(tasks.filter((_, i) => i !== index));
    };

    return(
        <>
          {/*Title at the top */}
          <h1 className="todo-title">My To-Do List</h1>

          <div className="App-Link">
              <input
                type="text"
                value={input}
                placeholder="Enter a Task"
                onChange={(e) => setInput(e.target.value)}
           />
           <button onClick={addTask}>Add Task</button>
           </div>
           <ul>
            {tasks.map((tasks, index) => (
                <li
                key={index}
                style={{
                    textDecoration: tasks.completed ? "line-through" : "none",
                }}
                >
                    <span onClick={() => toggleTask(index)}>{tasks.text}</span>
                    <button onClick={() => deleteTask(index)}>✖</button>
                </li>
            ))}
           </ul>
        </>
        
    );

}

export default ToDoList;

   