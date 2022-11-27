import { Child1 } from "./Components/Child1";
import { Child2 } from "./Components/Child2";
import { Child3 } from "./Components/Child3";
import { Container } from "./Components/Container";

// Component is rendered on 3 occasions
// 1. State change
// 2. Prop change
// 3. Parent render

export const App = () => {
    return (
        <Container>
            <Child1>
                <Child2>
                    <Child3 />
                </Child2>
            </Child1>
        </Container>
    );
};
