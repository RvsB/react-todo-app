import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";



function App() {


  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //functions

  useEffect(() => {

    const getLocalTodos = () => {
      if(localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let todoLocal = localStorage.getItem("todos");
        setTodos(JSON.parse(todoLocal));
      }
    };


    getLocalTodos(); //to get todos stored in local browser storage when we refresh the page
  }, []);

  useEffect(() => {

    const filterHandler = () => {
      switch(status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed == true))
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed == false))
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };

    //save to local browser storage
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };

    filterHandler();
    saveLocalTodos(); //to save the todos to the local browser storage
  }, [todos, status]);

  

  return (
    <div className="App">
      <header>
        <h1>Trensetter's Todo List</h1>
      </header>
      <div>
          <Form todos={todos} 
          setTodos={setTodos} 
          inputText={inputText} 
          setInputText={setInputText} 
          setStatus={setStatus}/>

          <TodoList todos={todos} setTodos={setTodos} status={status} filteredTodos={filteredTodos}/>
      </div>
    </div>
  );
}

export default App;
