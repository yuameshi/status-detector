import { Box, Card, CardContent, Grid2, Paper, Skeleton, Tooltip, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import CheckIcon from '@mui/icons-material/Check';
import { DetailedStatusCell } from './DetailedStatusCell';

export function MonitorCardPlaceholder() {
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
							<Skeleton
								variant='rounded'
								width={150}
							/>
						</Grid2>
						<Grid2 size='grow' />
						<Grid2
							sx={{
								display: 'inline-flex',
								alignItems: 'center',
								color: 'success.main',
							}}
						>
							<Skeleton
								variant='circular'
								width={18}
								sx={{ mx: 0.5 }}
							/>
							<Skeleton
								variant='rounded'
								width={35}
							/>
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
								<Skeleton
									variant='rounded'
									sx={{ height: '100%', width: '100%' }}
								/>
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
						<Skeleton
							variant='text'
							width={175}
						/>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
}
