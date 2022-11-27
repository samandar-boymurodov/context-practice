import { FC, memo, ReactNode, useEffect } from "react";

interface IChild2Props {
    children: ReactNode;
}

export const Child2: FC<IChild2Props> = memo(({ children }) => {
    useEffect(() => {
        console.log("Child 2 is rendered");
    });

    return <div>{children}</div>;
});

Child2.displayName = "Child2";
