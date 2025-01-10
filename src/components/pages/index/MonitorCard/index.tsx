import { Box, Card, CardContent, Grid2, Paper, Tooltip, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import CheckIcon from '@mui/icons-material/Check';
import { DetailedStatusCell } from '@components/pages/index/MonitorCard/DetailedStatusCell';

type MonitorCardProps = {
	title: string;
};

export function MonitorCard() {
	const t = useTranslations('index');

	return (
		<Card
			sx={{
				width: '100%',
				maxWidth: 1000,
				my: 1.5,
			}}
		>
			<CardContent>
				<Box>
					<Grid2
						container
						sx={{
							mb: 1,
						}}
					>
						<Grid2>
							<Typography variant='body1'>Lorem, ipsum.</Typography>
						</Grid2>
						<Grid2 size='grow' />
						<Grid2
							sx={{
								display: 'inline-flex',
								alignItems: 'center',
								color: 'success.main',
							}}
						>
							<CheckIcon sx={{ mx: 0.5 }} />
							<Typography variant='body1'>{t('monitor.status.operational')}</Typography>
						</Grid2>
					</Grid2>
					<Grid2
						container
						columns={60}
						columnSpacing={0.4}
						height={30}
					>
						{new Array(60).fill('').map((_, i) => (
							<Grid2
								key={i}
								size='grow'
								sx={{
									height: '100%',
								}}
							>
								<DetailedStatusCell availability={Math.random() * 100} />
							</Grid2>
						))}
					</Grid2>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							mt: 1,
						}}
					>
						<Typography
							variant='body2'
							color='text.secondary'
						>
							{t('monitor.stat', {
								days: 60,
								rate: 100,
							})}
						</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
}
