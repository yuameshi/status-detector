'use client';

import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

export function Title() {
	const t = useTranslations('common');

	return (
		<Typography
			variant='h6'
			component='div'
			sx={{ flexGrow: 1, m: 2 }}
		>
			{t('site name')}
		</Typography>
	);
}
