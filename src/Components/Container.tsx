import { FC, memo, ReactNode, useEffect } from "react";

interface IContainerProps {
    children: ReactNode;
}

export const Container: FC<IContainerProps> = memo(({ children }) => {
    useEffect(() => {
        console.log("Container is rendered");
    });

    return <div>{children}</div>;
});

Container.displayName = "Container";
