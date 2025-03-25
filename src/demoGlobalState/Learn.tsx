import ListTodo from "./listDodo";
import { useStore } from "./store";
import { addTodoList, deleteTodoList, setInput } from "./store/reducer/actions";
const LearnContext = () => {
    const store = useStore();
    if (!store) return null
    const [state, dispatch] = store
    const { todos, todoInput } = state
    const changeTodoInput = (event: { target: { value: string } }) => {
        dispatch(setInput(event.target.value))
    }
    const addTodo = () => {
        dispatch(addTodoList(todoInput))
    }
    const deleteItem = (id: number) => {
        dispatch(deleteTodoList(id.toString()))
    }
    return (
        <div style={{ padding: "20px" }}>
            <h1>Learn Global State</h1>
            <input value={todoInput} onChange={changeTodoInput} />
            <button onClick={addTodo}>Add Todo</button>
            <div className="listTodo">
                <ListTodo onClickDeleteItem={deleteItem} todos={todos} />
            </div>
        </div>
    )
}

export default LearnContext;