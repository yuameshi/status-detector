import { createContext } from 'react';

export const LoadedCounterContext = createContext({ loaded: 0, setLoaded: (...value: any[]) => {} });
