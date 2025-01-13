'use client';

import { CounterContext } from '@/contexts/counter';
import { MonitorCardWithDetail } from '@components/pages/index/MonitorCard/MonitorCardWithData';
import { MonitorCardPlaceholder } from '@components/pages/index/MonitorCard/Placeholder';
import { getData } from '@utils/getData';
import { useContext, useEffect, useState, type FC } from 'react';
import { IUptimeRobotApiReturn } from '~/types/IUptimeRobotApiReturn';

export const MonitorCard: FC<{
	showLinks: boolean;
	token: string;
	maxDays: number;
}> = ({ token, maxDays, showLinks }) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState<IUptimeRobotApiReturn>();
	const { setCounter } = useContext(CounterContext);

	useEffect(() => {
		(async () => {
			try {
				const data = await getData(token, maxDays);
				if (data.stat === 'ok') {
					setData(data);
					setLoading(false);
					if (data.monitors[0].status === 2) setCounter((prev: number) => prev + 1);
				}
			} catch (error) {}
		})();
	}, [token]);

	return loading || !data ? (
		<MonitorCardPlaceholder maxDays={maxDays} />
	) : (
		<MonitorCardWithDetail
			title={data.monitors[0].friendly_name}
			status={data.monitors[0].status}
			availability={data.monitors[0].custom_uptime_ranges}
			link={data.monitors[0].url}
			showLinks={showLinks}
			maxDays={maxDays}
		/>
	);
};
