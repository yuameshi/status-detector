'use client';

import { Alert as AlertProto } from '@mui/material';
import { CounterContext } from '@/contexts/counter';
import { useTranslations } from 'next-intl';
import { useContext } from 'react';
import { apiKeys } from '@constants/config';

export const Alert = () => {
	const { counter } = useContext(CounterContext);
	const t = useTranslations('index');

	return (
		<AlertProto
			variant='filled'
			severity={apiKeys.length === counter ? 'success' : apiKeys.length === 0 ? 'error' : 'warning'}
			sx={{
				width: '100%',
				mb: 1.5,
			}}
		>
			{apiKeys.length >= counter
				? t('status.all operational')
				: apiKeys.length === 0
					? t('status.major outage')
					: t('status.partial outage')}
		</AlertProto>
	);
};
