'use client';

import { Alert as AlertProto } from '@mui/material';
import { useTranslations } from 'next-intl';
import { type FC, useContext } from 'react';
import { LoadFailedCounterContext } from '@/contexts/load-failed-counter';

export const LoadFailedAlert: FC = () => {
	const { failed } = useContext(LoadFailedCounterContext);
	const t = useTranslations('index');

	return (
		failed > 0 && (
			<AlertProto
				variant='filled'
				severity='warning'
				sx={{
					width: '100%',
					mb: 1.5,
				}}
			>
				{t('status.load failed')}
			</AlertProto>
		)
	);
};
