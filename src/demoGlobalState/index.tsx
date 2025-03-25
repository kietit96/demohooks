import LearnContext from "./Learn";
import { ProviderContext } from "./store";

export default function DemoGlobalState() {
    return (
        <ProviderContext>
            <LearnContext />
        </ProviderContext>
    )
}