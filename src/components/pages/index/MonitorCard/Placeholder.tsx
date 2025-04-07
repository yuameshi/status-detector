import { Box, Card, CardContent, Grid, Skeleton } from '@mui/material';
import type { FC } from 'react';

export const MonitorCardPlaceholder: FC<{ maxDays: number }> = ({ maxDays }) => (
	<Card
		sx={{
			width: '100%',
			maxWidth: 1000,
			my: 1.5,
		}}
	>
		<CardContent>
			<Box>
				<Grid
					container
					sx={{
						mb: 1,
					}}
				>
					<Grid>
						<Skeleton
							variant='rounded'
							width={150}
						/>
					</Grid>
					<Grid size='grow' />
					<Grid
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
					</Grid>
				</Grid>
				<Box sx={{ maxWidth: '100%', overflow: 'hidden' }}>
					<Grid
						container
						columns={60}
						columnSpacing={0.4}
						height={30}
						minWidth={700}
					>
						{new Array(maxDays).fill('').map((_, i) => (
							<Grid
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
							</Grid>
						))}
					</Grid>
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						mt: 0.25,
					}}
				>
					<Skeleton
						variant='text'
						width={50}
					/>
					<Skeleton
						variant='text'
						width={75}
					/>
				</Box>
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
