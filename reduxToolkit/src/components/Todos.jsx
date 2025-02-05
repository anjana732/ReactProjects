import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../features/todo/storeSlice";

function Todos(){
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();
    return(
        <>
            {
                todos.map((todo)=> (
                <li key={todo.id}>{todo.text} 
                <button onClick={() => dispatch(removeTodo(todo.id))}> Delete</button>
                </li>))
            }
        </>
    )
}

export default Todos