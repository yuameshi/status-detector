'use client';

import { CounterContext } from '@/contexts/counter';
import { createContext, useState, type FC, type PropsWithChildren } from 'react';

export const CounterContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const [counter, setCounter] = useState(0);
	return <CounterContext.Provider value={{ counter, setCounter }}>{children}</CounterContext.Provider>;
};
