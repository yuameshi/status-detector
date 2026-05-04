import type { IUptimeRobotApiReturn } from '~/types/IUptimeRobotApiReturn';

const DEFAULT_CACHE_TTL = 5 * 60 * 1000; // 5 minutes
const cache = new Map<string, { data: IUptimeRobotApiReturn; timestamp: number }>();

function getCacheKey(token: string, maxDays: number) {
	return `${token}_${maxDays}`;
}

export function clearCache() {
	cache.clear();
}

export function getCachedData(token: string, maxDays: number, cacheTtl: number = DEFAULT_CACHE_TTL): IUptimeRobotApiReturn | undefined {
	const key = getCacheKey(token, maxDays);
	const cached = cache.get(key);
	if (cached && Date.now() - cached.timestamp < cacheTtl) {
		return cached.data;
	}
	return undefined;
}

function getDates(maxDays = 60) {
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

export async function getData(token: string, maxDays: number = 60, cacheTtl: number = DEFAULT_CACHE_TTL): Promise<IUptimeRobotApiReturn> {
	const cached = getCachedData(token, maxDays, cacheTtl);
	if (cached) return cached;

	const data: IUptimeRobotApiReturn = await (
		await fetch('https://api.uptimerobot.com/v2/getMonitors', {
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				api_key: token,
				format: 'json',
				logs: 1,
				log_types: '1-2',
				...getDates(maxDays),
			}),
			method: 'POST',
		})
	).json();

	cache.set(getCacheKey(token, maxDays), { data, timestamp: Date.now() });
	return data;
}
