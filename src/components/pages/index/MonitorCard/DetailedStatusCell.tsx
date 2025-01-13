'use client';

import { Paper, Tooltip } from '@mui/material';
import { useTranslations } from 'next-intl';
import { type FC, useState } from 'react';

type DetailedStatusCellProps = {
	availability?: number;
	range?: string;
};

export const DetailedStatusCell: FC<DetailedStatusCellProps> = ({ availability, range }) => {
	const [isHovered, setIsHovered] = useState(false);
	const statPeriod = range
		?.split('_')
		.map(date => {
			const dateObj = new Date(Number(date) * 1000);
			return dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1) + '-' + dateObj.getDate();
		})
		.join(' - ');
	const t = useTranslations('index');

	return (
		<Tooltip
			title={t('monitor.detail stat', {
				date: statPeriod,
				rate: availability,
			})}
			placement='top'
		>
			<Paper
				elevation={isHovered ? 4 : 0}
				onMouseOver={() => setIsHovered(true)}
				onMouseOut={() => setIsHovered(false)}
				sx={{
					height: '100%',
					width: '100%',
					backgroundColor:
						availability === undefined // unknown
							? 'info.main'
							: availability > 95 // operational
								? 'success.main'
								: availability > 50 // degraded
									? 'warning.main'
									: 'error.main', // down
				}}
			/>
		</Tooltip>
	);
};
