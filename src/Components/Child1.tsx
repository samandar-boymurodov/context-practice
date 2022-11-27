import { FC, memo, ReactNode, useEffect } from "react";

interface IChild1Props {
    children: ReactNode;
}

export const Child1: FC<IChild1Props> = memo(({ children }) => {
    useEffect(() => {
        console.log("Child 1 is rendered");
    });

    return <div>{children}</div>;
});

Child1.displayName = "Child1";
