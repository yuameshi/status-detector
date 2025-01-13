'use client';

import { Alert as AlertProto } from '@mui/material';
import { OperationalCounterContext } from '@/contexts/operational-counter';
import { useTranslations } from 'next-intl';
import { type FC, useContext } from 'react';

type AlertProps = {
	keysLength: number;
};

export const Alert: FC<AlertProps> = ({ keysLength }) => {
	const { counter } = useContext(OperationalCounterContext);
	const t = useTranslations('index');

	return keysLength > 0 ? (
		<AlertProto
			variant='filled'
			severity={counter >= keysLength ? 'success' : counter === 0 ? 'error' : 'warning'}
			sx={{
				width: '100%',
				mb: 1.5,
			}}
		>
			{counter >= keysLength ? t('status.all operational') : counter === 0 ? t('status.major outage') : t('status.partial outage')}
		</AlertProto>
	) : null;
};
