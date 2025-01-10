'use client';

import { Paper, Tooltip } from '@mui/material';
import { useTranslations } from 'next-intl';
import { type FC, useState } from 'react';

type DetailedStatusCellProps = {
	availability?: number;
};

export const DetailedStatusCell: FC<DetailedStatusCellProps> = ({ availability }) => {
	const [isHovered, setIsHovered] = useState(false);
	const t = useTranslations('index');

	return (
		<Tooltip
			title={t('monitor.detail stat', {
				date: '2024-01-10',
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
