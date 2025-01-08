'use client';

import { CacheProvider } from '@emotion/react';
import { createEmotionCache } from '@utils/createEmotionCache';

export function EmotionCache({ children }: Readonly<{ children: React.ReactNode }>) {
	const cache = createEmotionCache();
	return <CacheProvider value={cache}>{children}</CacheProvider>;
}
