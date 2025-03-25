import { method_actions } from "./constants"

export const setJob = (payload: string) => {
    return {
        type: method_actions.SET_JOB,
        payload
    }
}
export const addJob = (payload: string) => {
    return {
        type: method_actions.ADD_JOB,
        payload
    }
}
export const removeJob = (payload: string) => {
    return {
        type: method_actions.DELETE_JOB,
        payload
    }
}