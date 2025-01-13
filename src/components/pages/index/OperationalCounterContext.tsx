'use client';

import { OperationalCounterContext } from '@/contexts/operational-counter';
import { useState, type FC, type PropsWithChildren } from 'react';

export const OperationalCounterContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const [counter, setCounter] = useState(0);
	return <OperationalCounterContext.Provider value={{ counter, setCounter }}>{children}</OperationalCounterContext.Provider>;
};
