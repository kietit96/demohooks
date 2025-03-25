import { useReducer } from 'react';
import './style.css'
import { addJob, removeJob, setJob } from './actions';
import reducer, { initState } from './reducer';


export default function TodoListUseReducer() {
    const [state, dispatch] = useReducer(reducer, initState)
    const { job, jobs } = state
    const changeInput = (event: { target: { value: string; }; }) => {
        dispatch(setJob(event.target.value))
    }
    const addJobInput = () => {
        dispatch(addJob(job))
    }
    const removeJobInput = (value: number) => {
        dispatch(removeJob(value.toString()))
    }
    return (
        <div>
            <h2>Todo list</h2>
            <input
                value={job}
                onChange={changeInput} />
            <button onClick={addJobInput}>Add</button>
            <div className="list">
                <ul>
                    {jobs.map((item: string, index: number) => <li onClick={() => removeJobInput(index)} key={index}>{item}</li>)}
                </ul>
            </div>
        </div>
    )
}
