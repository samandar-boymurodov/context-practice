import { FC, memo, useEffect } from "react";
import { useCounterContext } from "../Context/CounterContext";

export const Child3: FC = memo(() => {
    const { incrementCount } = useCounterContext();

    useEffect(() => {
        console.log("Child 3 is rendered");
    });

    return (
        <div>
            <button type={"button"} onClick={incrementCount}>
                Increment counter
            </button>
        </div>
    );
});
Child3.displayName = "Child3";
