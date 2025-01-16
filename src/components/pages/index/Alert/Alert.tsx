'use client';

import { Alert as AlertProto } from '@mui/material';
import { OperationalCounterContext } from '@/contexts/operational-counter';
import { useTranslations } from 'next-intl';
import { type FC, useContext } from 'react';
import { LoadedCounterContext } from '@/contexts/loaded-counter';

type AlertProps = {
	keysLength: number;
};

export const Alert: FC<AlertProps> = ({ keysLength }) => {
	const { counter } = useContext(OperationalCounterContext);
	const { loaded } = useContext(LoadedCounterContext);
	const t = useTranslations('index');

	return (
		loaded >= keysLength && (
			<AlertProto
				variant='filled'
				severity={counter >= loaded ? 'success' : counter === 0 ? 'error' : 'warning'}
				sx={{
					width: '100%',
					mb: 1.5,
				}}
			>
				{counter >= loaded ? t('status.all operational') : counter === 0 ? t('status.major outage') : t('status.partial outage')}
			</AlertProto>
		)
	);
};
