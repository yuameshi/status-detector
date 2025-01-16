import { createContext } from 'react';

export const LoadFailedCounterContext = createContext({ failed: 0, setFailed: (...value: any[]) => {} });
