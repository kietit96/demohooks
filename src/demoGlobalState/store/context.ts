import { createContext } from "react";
import { Iaction, Itodo } from "./type";

const Context = createContext<[Itodo, React.Dispatch<Iaction>] | undefined>(undefined)
export default Context