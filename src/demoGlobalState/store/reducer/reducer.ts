import { Iaction, Itodo } from "../type";
import { ActionTypes } from "./contrants";

export const initialState: Itodo = {
    todos: [],
    todoInput: ''
}

export default function reducer(state: Itodo = initialState, action: Iaction): Itodo {
    switch (action.type) {
        case ActionTypes.SET_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ActionTypes.ADD_TODOLIST:
            return {
                ...state,
                todoInput: '',
                todos: [...state.todos, action.payload]
            }
        case ActionTypes.DELETE_TODOLIST:
            return {
                ...state,
                todoInput: '',
                todos: state.todos.filter((_, index: number) => index !== +action.payload)
            }
        default:
            throw new Error('handle not exist: ' + action.type);
    }
}