'use client';

import { LoadedCounterContext } from '@/contexts/loaded-counter';
import { useState, type FC, type PropsWithChildren } from 'react';

export const LoadedCounterContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const [loaded, setLoaded] = useState(0);
	return <LoadedCounterContext.Provider value={{ loaded, setLoaded }}>{children}</LoadedCounterContext.Provider>;
};
