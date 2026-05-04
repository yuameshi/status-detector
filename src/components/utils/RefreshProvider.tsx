'use client';

import { RefreshContext } from '@/contexts/refresh';
import { clearCache } from '@utils/getData';
import { useCallback, useEffect, useRef, useState, type FC, type PropsWithChildren } from 'react';

export const RefreshProvider: FC<PropsWithChildren<{ refreshInterval: number }>> = ({ refreshInterval, children }) => {
	const [refreshKey, setRefreshKey] = useState(0);
	const [secondsLeft, setSecondsLeft] = useState(refreshInterval);
	const secondsLeftRef = useRef(refreshInterval);

	const triggerRefresh = useCallback(() => {
		clearCache();
		setRefreshKey(prev => prev + 1);
		secondsLeftRef.current = refreshInterval;
		setSecondsLeft(refreshInterval);
	}, [refreshInterval]);

	useEffect(() => {
		const interval = setInterval(() => {
			secondsLeftRef.current -= 1;
			if (secondsLeftRef.current <= 0) {
				clearCache();
				setRefreshKey(prev => prev + 1);
				secondsLeftRef.current = refreshInterval;
			}
			setSecondsLeft(secondsLeftRef.current);
		}, 1000);

		return () => clearInterval(interval);
	}, [refreshInterval]);

	return <RefreshContext.Provider value={{ refreshKey, secondsLeft, triggerRefresh }}>{children}</RefreshContext.Provider>;
};

