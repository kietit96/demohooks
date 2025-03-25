import { method_actions } from "./constants"
import { typeJob } from "./type"

export const initState: typeJob = {
    job: '',
    jobs: []
}
const reducer = (state: typeJob, action: { type: string, payload: string }) => {
    let newState
    switch (action.type) {
        case method_actions.SET_JOB:
            newState = {

                ...state,
                job: action.payload

            }
            break
        case method_actions.ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload],
                job: ''
            }
            break
        case method_actions.DELETE_JOB: {
            const newJobs = state.jobs.filter((value: string, index: number) => index !== +action.payload)
            newState = {
                ...state,
                jobs: newJobs,
                job: ''
            }
            break
        }
        default:
            throw new Error()
    }
    return newState
}
export default reducer