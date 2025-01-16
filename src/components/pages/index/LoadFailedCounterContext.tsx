'use client';

import { LoadFailedCounterContext } from '@/contexts/load-failed-counter';
import { useState, type FC, type PropsWithChildren } from 'react';

export const LoadFailedCounterContextProvider: FC<PropsWithChildren> = ({ children }) => {
	const [failed, setFailed] = useState(0);
	return <LoadFailedCounterContext.Provider value={{ failed, setFailed }}>{children}</LoadFailedCounterContext.Provider>;
};
