export const apiKeys: string[] = process.env.API_KEYS?.split(',').map(key => key.trim()) || [];

export const showLinks: boolean = true;

export const maxDays: number = 60;

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
