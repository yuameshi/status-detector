'use client';

import dynamic from 'next/dynamic';
import { OperationalCounterContext } from '@/contexts/operational-counter';
import { LoadedCounterContext } from '@/contexts/loaded-counter';
const MonitorCardWithDetail = dynamic(() => import('./MonitorCardWithData').then(el => el.MonitorCardWithDetail));
// import { MonitorCardWithDetail } from '@components/pages/index/MonitorCard/MonitorCardWithData';
import { MonitorCardPlaceholder } from '@components/pages/index/MonitorCard/Placeholder';
import { getData } from '@utils/getData';
import { useContext, useEffect, useState, type FC } from 'react';
import { IUptimeRobotApiReturn } from '~/types/IUptimeRobotApiReturn';
const MonitorCardFailed = dynamic(() => import('./Failed').then(el => el.MonitorCardFailed));
// import { MonitorCardFailed } from '@components/pages/index/MonitorCard/Failed';
import { LoadFailedCounterContext } from '@/contexts/load-failed-counter';

export const MonitorCard: FC<{
	showLinks: boolean;
	token: string;
	maxDays: number;
}> = ({ token, maxDays, showLinks }) => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState<IUptimeRobotApiReturn>();
	const { setCounter } = useContext(OperationalCounterContext);
	const { setLoaded } = useContext(LoadedCounterContext);
	const { setFailed } = useContext(LoadFailedCounterContext);

	useEffect(() => {
		(async () => {
			try {
				const data = await getData(token, maxDays);
				if (data.stat === 'ok') {
					setData(data);
					setLoading(false);
					setLoaded((prev: number) => prev + 1);
					if (data.monitors[0].status === 2) setCounter((prev: number) => prev + 1);
				}
			} catch (error) {
				setLoading(false);
				setFailed((prev: number) => prev + 1);
				console.error(error);
			}
		})();
	}, [token]);

	if (loading === true && data === undefined) return <MonitorCardPlaceholder maxDays={maxDays} />;
	else if (loading === false && data !== undefined)
		return (
			<MonitorCardWithDetail
				title={data.monitors[0].friendly_name}
				status={data.monitors[0].status}
				availability={data.monitors[0].custom_uptime_ranges}
				link={data.monitors[0].url}
				showLinks={showLinks}
				maxDays={maxDays}
			/>
		);
	else return <MonitorCardFailed />;
};
