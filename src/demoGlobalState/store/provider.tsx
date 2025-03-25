import { ReactNode, useReducer } from "react"
import { ThemeContext } from "."
import reducer, { initialState } from "./reducer/reducer"

interface childenProps {
    children: ReactNode
}
export default function Provider({ children }: childenProps) {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <ThemeContext.Provider value={[state, dispatch]}>
            {children}
        </ThemeContext.Provider>
    )

}
