import Todo from "./Todo";


const TodoList = ({ todos, setTodos, filteredTodos }) => {
    console.log(todos);


    return ( 
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo) => ( //here mostly all the todos get rendered again when one todo is added
                    <Todo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;