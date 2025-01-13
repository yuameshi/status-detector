import type { FC } from 'react';
import { Box, Card, CardContent, Grid2, IconButton, Typography } from '@mui/material';
import { useTranslations } from 'next-intl';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { DetailedStatusCell } from '@components/pages/index/MonitorCard/DetailedStatusCell';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

enum Status {
	Unknown,
	Failed,
	Operational,
}

type MonitorCardProps = {
	title: string;
	status: Status;
	availability: string;
	link: string;
	showLinks: boolean;
	maxDays: number;
};

function getDates(maxDays = 60) {
	const DAY = 86400;
	const periods = [];
	const start = Math.floor(new Date().valueOf() / 1000) + DAY;
	for (let i = 0; i < maxDays; i++) {
		// Bigger number is placed last
		periods.push([start - DAY * (i + 1), start - DAY * i].join('_'));
	}
	periods.push([start - DAY * maxDays, start].join('_'));
	return {
		startDate: start - DAY * maxDays,
		ranges: periods,
	};
}

export const MonitorCardWithDetail: FC<MonitorCardProps> = ({ title, status, link, availability, showLinks, maxDays }) => {
	const t = useTranslations('index');
	const dates = getDates(maxDays);
	const day = dates.ranges;
	const startDate = new Date(dates.startDate * 1000);

	return (
		<Card
			sx={{
				width: '100%',
				maxWidth: 1000,
				my: 1.5,
			}}
		>
			<CardContent sx={{ mb: -1.5 }}>
				<Box>
					<Grid2
						container
						sx={{
							mb: 1,
						}}
					>
						<Grid2
							display='inline-flex'
							alignItems='center'
						>
							<Typography variant='body1'>{title}</Typography>
							{showLinks && (
								<IconButton
									href={link}
									target='_blank'
									size={'small'}
									rel='noopener noreferrer'
									sx={{ mx: 1 }}
								>
									<OpenInNewIcon fontSize='small' />
								</IconButton>
							)}
						</Grid2>
						<Grid2 size='grow' />
						<Grid2
							sx={{
								display: 'inline-flex',
								alignItems: 'center',
								color:
									status === Status.Operational
										? 'success.main'
										: status === Status.Failed
											? 'error.main'
											: 'info.main',
							}}
						>
							{status === Status.Operational ? (
								<CheckIcon sx={{ mx: 0.5 }} />
							) : status === Status.Failed ? (
								<CloseIcon sx={{ mx: 0.5 }} />
							) : (
								<QuestionMarkIcon sx={{ fontSize: 17, mx: 0.5 }} />
							)}
							<Typography variant='body1'>
								{status === Status.Operational
									? t('monitor.status.operational')
									: status === Status.Failed
										? t('monitor.status.failed')
										: t('monitor.status.unknown')}
							</Typography>
						</Grid2>
					</Grid2>
					<Grid2
						container
						columns={60}
						columnSpacing={0.4}
						height={30}
					>
						{availability
							.split('-')
							.slice(0, -1)
							.map((range, i) => (
								<Grid2
									key={i}
									size='grow'
									sx={{
										height: '100%',
									}}
								>
									<DetailedStatusCell
										availability={Number(range)}
										range={day[i]}
									/>
								</Grid2>
							))}
					</Grid2>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							mt: 0.25,
						}}
					>
						<Typography variant='body2'>{t('monitor.today')}</Typography>
						<Typography variant='body2'>
							{startDate.getFullYear() + '-' + (startDate.getMonth() + 1) + '-' + startDate.getDate()}
						</Typography>
					</Box>
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
								days: maxDays,
								rate: Number(availability.split('-').slice(-1)[0]).toFixed(2),
							})}
						</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	);
};
