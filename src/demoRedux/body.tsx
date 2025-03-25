import { useDispatch, useSelector } from "react-redux"
import { decrease, increase } from "./store/slice"

export default function Body() {
    const state = useSelector((state: number) => state)
    const dispatch = useDispatch()
    const setUpNumber = () => {
        dispatch(increase())
    }
    const setDownNumber = () => {
        dispatch(decrease())
    }
    return (
        <div>
            <p>Current Number: {JSON.stringify(state)}</p>
            <button onClick={setUpNumber}>Up</button>
            <button onClick={setDownNumber}>Down</button>
        </div>
    )
}
