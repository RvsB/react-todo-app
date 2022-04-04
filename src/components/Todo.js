const Todo = ({ todo, setTodos, todos }) => {
    //events

    const deleteHandler = () => {
        setTodos(todos.filter((elem) => elem.id !== todo.id));
    };

    const completeHandler = () => {
        setTodos(todos.map((elem) => {
            if (elem.id === todo.id) {
                return {
                    ...elem, completed: !elem.completed
                };
            }
            return elem;
        }));
    }

    return ( 
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
            <button className="complete-btn" onClick={completeHandler}> 
                <i className="fas fa-check"></i>
            </button>  
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>  
        </div>
    );
}

export default Todo;