import { Box, Card, CardContent, Grid, Skeleton, Typography } from '@mui/material';
import type { FC } from 'react';
import WarningIcon from '@mui/icons-material/Warning';
import { useTranslations } from 'next-intl';

export const MonitorCardFailed: FC = () => {
	const t = useTranslations('index');
	return (
		<Card
			sx={{
				width: '100%',
				maxWidth: 1000,
				my: 1.5,
			}}
		>
			<CardContent
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					height: 140,
				}}
			>
				<WarningIcon
					fontSize='large'
					sx={{ m: 2 }}
				/>
				<Typography>{t('monitor.load failed')}</Typography>
			</CardContent>
		</Card>
	);
};
