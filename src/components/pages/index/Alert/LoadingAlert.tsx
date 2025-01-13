'use client';

import { Alert as AlertProto } from '@mui/material';
import { LoadedCounterContext } from '@/contexts/loaded-counter';
import { useTranslations } from 'next-intl';
import { type FC, useContext } from 'react';

type AlertProps = {
	keysLength: number;
};

export const LoadingAlert: FC<AlertProps> = ({ keysLength }) => {
	const { loaded } = useContext(LoadedCounterContext);
	const t = useTranslations('index');

	return keysLength > 0
		? loaded < keysLength && (
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
		: null;
};
