import { createContext } from 'react';

export const RefreshContext = createContext({
	refreshKey: 0,
	secondsLeft: 0,
	triggerRefresh: () => {},
});
