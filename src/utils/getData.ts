import { maxDays } from '@constants/config';
import type { IUptimeRobotApiReturn } from '~/types/IUptimeRobotApiReturn';

function getDates() {
	const DAY = 86400;
	const periods = [];
	const start = new Date(new Date().toLocaleDateString()).valueOf() / 1000 + DAY;
	for (let i = 0; i < maxDays; i++) {
		// Bigger number is placed last
		periods.push([start - DAY * (i + 1), start - DAY * i].join('_'));
	}
	periods.push([start - DAY * maxDays, start].join('_'));
	return {
		logs_start_date: start - DAY * maxDays,
		logs_end_date: start,
		custom_uptime_ranges: periods.join('-'),
	};
}

export async function getData(token: string): Promise<IUptimeRobotApiReturn> {
	return await (
		await fetch('https://api.uptimerobot.com/v2/getMonitors', {
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				api_key: token,
				format: 'json',
				logs: 1,
				log_types: '1-2',
				...getDates(),
			}),
			method: 'POST',
		})
	).json();
}
