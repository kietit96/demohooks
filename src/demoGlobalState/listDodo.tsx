interface IProps {
    todos: string[];
    onClickDeleteItem: (index: number) => void
}
export default function ListTodo(props: IProps) {
    const { todos, onClickDeleteItem } = props
    return (
        <ul>
            {todos.map((todo: string, index: number) => <li onClick={() => onClickDeleteItem(index)} key={index}>{todo}</li>)}
        </ul>
    )
}