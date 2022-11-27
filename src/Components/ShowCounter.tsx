import { FC, memo } from "react";
import { useCounterContext } from "../Context/CounterContext";

interface IShowCounterProps {
    color: string;
}

export const ShowCounter: FC<IShowCounterProps> = memo(({ color }) => {
    const { count } = useCounterContext();

    return <h1 style={{ color: color }}>{count}</h1>;
});

ShowCounter.displayName = "ShowCounter";
