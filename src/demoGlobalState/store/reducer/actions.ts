import { ActionTypes } from "./contrants";

export function setInput(payload: string) {
    return {
        type: ActionTypes.SET_INPUT,
        payload
    }
}
export function addTodoList(payload: string) {
    return {
        type: ActionTypes.ADD_TODOLIST,
        payload
    }
}
export function deleteTodoList(payload: string) {
    return {
        type: ActionTypes.DELETE_TODOLIST,
        payload
    }
}