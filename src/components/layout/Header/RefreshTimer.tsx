'use client';

import { RefreshContext } from '@/contexts/refresh';
import { IconButton, Typography, Box } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { useContext } from 'react';
import { useTranslations } from 'next-intl';

function formatTime(seconds: number): string {
	const m = Math.floor(seconds / 60);
	const s = seconds % 60;
	return `${m}:${s.toString().padStart(2, '0')}`;
}

export function RefreshTimer() {
	const { secondsLeft, triggerRefresh } = useContext(RefreshContext);
	const t = useTranslations('common');

	return (
		<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
			<Typography
				variant='body2'
				sx={{ color: 'inherit', opacity: 0.8, whiteSpace: 'nowrap' }}
				title={t('refresh.next refresh')}
			>
				{formatTime(secondsLeft)}
			</Typography>
			<IconButton
				size='large'
				aria-label={t('refresh.refresh now')}
				onClick={triggerRefresh}
				color='inherit'
				title={t('refresh.refresh now')}
			>
				<RefreshIcon />
			</IconButton>
		</Box>
	);
}
