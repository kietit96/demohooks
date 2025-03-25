import { Provider } from "react-redux";
import store from "./store/store";
import Body from "./body";

export default function DemoRedux() {
    return (
        <Provider store={store}>
            <Body />
        </Provider>
    )
}