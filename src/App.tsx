import { useState } from "react";
import { CounterContext } from "./Context/CounterContext";
import { Child1 } from "./Components/Child1";
import { Child2 } from "./Components/Child2";
import { Child3 } from "./Components/Child3";
import { ShowCounter } from "./Components/ShowCounter";
import { Container } from "./Components/Container";

// Component is rendered on 3 occasions
// 1. State change
// 2. Prop change
// 3. Parent render

export const App = () => {
    const [counter, setCounter] = useState<number>(0);
    const [color, setColor] = useState<string>("green");

    const incrementCounter = () => setCounter((prevState) => prevState + 1);

    return (
        <CounterContext.Provider
            value={{
                count: counter,
                incrementCount: incrementCounter,
            }}
        >
            <div>
                <label htmlFor="green">Green</label>
                <input
                    type="radio"
                    name={"color"}
                    value={"green"}
                    onChange={(e) => setColor(e.target.value)}
                    checked={"green" === color}
                    id={"green"}
                />
                <br />
                <label htmlFor="red">Red</label>
                <input
                    type="radio"
                    name={"color"}
                    value={"red"}
                    onChange={(e) => setColor(e.target.value)}
                    checked={"red" === color}
                    id={"red"}
                />
            </div>
            <ShowCounter color={color} />
            <Container>
                <Child1>
                    <Child2>
                        <Child3 />
                    </Child2>
                </Child1>
            </Container>
        </CounterContext.Provider>
    );
};
