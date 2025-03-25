import { createContext, useState } from 'react'
import ComB from './comB'
import './style.css'

const THEME_DEFAULT = 'dark'
const THEME_LIGHT = 'light'
export const ThemeContext = createContext<[string, () => void]>([THEME_DEFAULT, () => { }])

export default function DemoContext() {
    const [theme, setTheme] = useState<string>(THEME_DEFAULT)
    const changeTheme = (): void => {
        setTheme(theme === THEME_DEFAULT ? THEME_LIGHT : THEME_DEFAULT)
    }

    return (
        <ThemeContext.Provider value={[theme, changeTheme]}>
            <div className="container">
                <h3> Demo Context </h3>
                <ComB />
            </div>
        </ThemeContext.Provider>
    )
}