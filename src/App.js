import { useState } from "react";
function App() {
  const a = 5;
  let message;
  const isLoggedIn = true;
  const [count, setCount] = useState(0);
  const students = ["Anne", "Bob", "Charlie"];
  const [task, setTask] = useState([]); 
  const [input, setInput] = useState("");

  const addTask = () => {
    if(input.trim() === "") return;
    setTasks([...task, input]);
    setInput("");
  }
  return (
    <>
      <h1>Hello, React!</h1>
      <p>a is equal to {a}</p>
      <p>{message}</p>
      if(isLoggedIn){
        message = "Welcome Back!."
      }
      <p>{message}</p>
      else
      {   
        message = "Please Log In."
      }
      <p>{message}</p>

      <>
      <h1>Hello, React</h1>
      <p>a is equal to {a}</p>

      <h2>{a > 5 ? "welcome" : "Please Log In."}</h2>
      <p>count: {count}</p>
      <button onClick = {() => setCount(count + 1)}>Increase</button>
      <button onClick = {() => setCount(count - 1)}>Decrease</button>
      <button onClick = {() => setCount(0)}>Reset</button>
      </>


    </>     
  )
}
export default App;