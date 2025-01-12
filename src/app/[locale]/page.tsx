import { Alert, Box } from '@mui/material';
import { useTranslations } from 'next-intl';
import { apiKeys } from '@constants/config';
import { MonitorCard } from '@components/pages/index/MonitorCard';

export default function Home() {
	const t = useTranslations('index');

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					px: 3,
					width: '100%',
					maxWidth: 1000,
					alignItems: 'center',
					// justifyContent: 'center',
					// height: '100vh',
				}}
			>
				<Alert
					variant='filled'
					severity='success'
					sx={{
						width: '100%',
						mb: 1.5,
					}}
				>
					{t('status.all operational')}
				</Alert>
				{apiKeys.map((_, i) => (
					<MonitorCard
						key={i}
						token={apiKeys[i]}
					/>
				))}
			</Box>
		</Box>
	);
}
