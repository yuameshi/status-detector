import { createContext } from 'react';

export const RefreshContext = createContext({
	refreshKey: 0,
	secondsLeft: 0,
	refreshInterval: 300,
	triggerRefresh: () => {},
});
