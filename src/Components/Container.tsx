import { FC, memo, ReactNode, useEffect, useState } from "react";
import { CounterContextProvider } from "../Context/CounterContext";
import { ColorInput } from "./ColorInput";
import { ShowCounter } from "./ShowCounter";

interface IContainerProps {
    children: ReactNode;
}

export const Container: FC<IContainerProps> = memo(({ children }) => {
    const [color, setColor] = useState<string>("green");

    useEffect(() => {
        console.log("Container is rendered");
    });

    return (
        <CounterContextProvider>
            <ColorInput color={color} setColor={setColor} />
            <ShowCounter color={color} />
            <div>{children}</div>
        </CounterContextProvider>
    );
});

Container.displayName = "Container";
