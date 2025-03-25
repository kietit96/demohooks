import { useContext } from "react"
import { ThemeContext } from "."

export default function ComC() {
    const context = useContext(ThemeContext)
    const [theme, changeTheme] = context
    return (
        <button className={theme} onClick={changeTheme}>Set theme</button>
    )
}