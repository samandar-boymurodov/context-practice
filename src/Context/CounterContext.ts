import { createContext, useContext } from "react";

export interface ICounterContext {
    count: number;
    incrementCount: () => void;
}

export const CounterContext = createContext<ICounterContext | null>(null);

export const useCounterContext = (): ICounterContext =>
    useContext(CounterContext) as ICounterContext;
