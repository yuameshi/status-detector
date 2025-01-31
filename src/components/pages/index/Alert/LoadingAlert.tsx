'use client';

import { Alert as AlertProto } from '@mui/material';
import { LoadedCounterContext } from '@/contexts/loaded-counter';
import { useTranslations } from 'next-intl';
import { type FC, useContext } from 'react';
import { LoadFailedCounterContext } from '@/contexts/load-failed-counter';

type AlertProps = {
	keysLength: number;
};

export const LoadingAlert: FC<AlertProps> = ({ keysLength }) => {
	const { loaded } = useContext(LoadedCounterContext);
	const { failed } = useContext(LoadFailedCounterContext);
	const t = useTranslations('index');

	return (
		loaded + failed < keysLength && (
			<AlertProto
				variant='filled'
				severity='info'
				sx={{
					width: '100%',
					mb: 1.5,
				}}
			>
				{t('status.loading')}
			</AlertProto>
		)
	);
};
