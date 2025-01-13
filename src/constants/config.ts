export const apiKeys: string[] = process.env.API_KEYS?.split(',').map(key => key.trim()) || [];

export const showLinks: boolean = process.env.SHOW_LINKS === 'true';

export const maxDays: number = Number(process.env.MAX_DAYS) || 60;

export const externalLinks: ExternalLink[] =
	process.env.EXTERNAL_LINKS?.split('_').map(el => ({
		name: el.split('|')[0],
		url: el.split('|')[1],
	})) || [];

export const config = {
	apiKeys,
	showLinks,
	maxDays,
	externalLinks,
};
