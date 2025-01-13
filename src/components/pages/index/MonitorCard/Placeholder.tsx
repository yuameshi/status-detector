import { Box, Card, CardContent, Grid2, Skeleton } from '@mui/material';
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
				<Box sx={{ maxWidth: '100%', overflow: 'hidden' }}>
					<Grid2
						container
						columns={60}
						columnSpacing={0.4}
						height={30}
						minWidth={700}
					>
						{new Array(maxDays).fill('').map((_, i) => (
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
