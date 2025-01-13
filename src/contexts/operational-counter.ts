import { createContext } from 'react';

export const OperationalCounterContext = createContext({ counter: 0, setCounter: (...value: any[]) => {} });
