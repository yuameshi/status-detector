'use client';

import { IconButton, useColorScheme } from '@mui/material';
import { useEffect, useState } from 'react';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

export function DarkmodeToggle() {
	const { mode, setMode, systemMode } = useColorScheme();

	const [darkmodeState, setDarkmodeState] = useState<'dark' | 'light'>(
		(mode === 'system' ? (systemMode === 'dark' ? 'dark' : 'light') : mode) || 'light',
	);
	useEffect(() => {
		setDarkmodeState((mode === 'system' ? (systemMode === 'dark' ? 'dark' : 'light') : mode) || 'light');
	}, [mode, systemMode]);

	useEffect(() => {
		setDarkmodeState((mode === 'system' ? (systemMode === 'dark' ? 'dark' : 'light') : mode) || 'light');
	}, []);

	return (
		<IconButton
			size='large'
			aria-label='switch theme'
			onClick={() => setMode(darkmodeState === 'light' ? 'dark' : 'light')}
			color='inherit'
		>
			{darkmodeState === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
		</IconButton>
	);
}
