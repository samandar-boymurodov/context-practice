import {
    createContext,
    FC,
    ReactNode,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";

export interface ICounterContext {
    count: number;
    incrementCount: () => void;
}

export const CounterContext = createContext<ICounterContext | null>(null);

export const useCounterContext = (): ICounterContext =>
    useContext(CounterContext) as ICounterContext;

interface ICounterContextProvider {
    children: ReactNode;
}

export const CounterContextProvider: FC<ICounterContextProvider> = ({
    children,
}) => {
    const [counter, setCounter] = useState<number>(0);

    const incrementCounter = useCallback(
        () => setCounter((prevState) => prevState + 1),
        []
    );

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
            {children}
        </CounterContext.Provider>
    );
};
