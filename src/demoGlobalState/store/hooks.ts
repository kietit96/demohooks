import { useContext } from "react"
import { ThemeContext } from "."

export const useStore = () => {
    const context = useContext(ThemeContext)
    return context
}