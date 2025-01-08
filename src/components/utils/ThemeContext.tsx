'use client';

import { ThemeProvider } from '@mui/material';
import { theme } from '@constants/theme';

export function ThemeContext({ children }: Readonly<{ children: React.ReactNode }>) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
