import { useCallback, useMemo, useState } from "react";
import { CounterContext } from "./Context/CounterContext";
import { Child1 } from "./Components/Child1";
import { Child2 } from "./Components/Child2";
import { Child3 } from "./Components/Child3";
import { ShowCounter } from "./Components/ShowCounter";
import { Container } from "./Components/Container";
import { ColorInput } from "./Components/ColorInput";

// Component is rendered on 3 occasions
// 1. State change
// 2. Prop change
// 3. Parent render

export const App = () => {
    const [counter, setCounter] = useState<number>(0);
    const [color, setColor] = useState<string>("green");

    const incrementCounter = useCallback(
        () => setCounter((prevState) => prevState + 1),
        []
    );

    const child3 = useMemo(() => <Child3 />, []);
    const child2 = useMemo(() => <Child2 children={child3} />, [child3]);
    const child1 = useMemo(() => <Child1 children={child2} />, [child2]);

    return (
        <CounterContext.Provider
            value={useMemo(
                () => ({
                    count: counter,
                    incrementCount: incrementCounter,
                }),
                [counter, incrementCounter]
            )}
        >
            <ColorInput color={color} setColor={setColor} />
            <ShowCounter color={color} />
            <Container>{child1}</Container>
        </CounterContext.Provider>
    );
};
