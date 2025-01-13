export const apiKeys: string[] = process.env.API_KEYS?.split(',').map(key => key.trim()) || [];

export const showLinks: boolean = true;

export const maxDays: number = 60;

export const externalLinks: ExternalLink[] = [];

export const config = {
	apiKeys,
	showLinks,
	maxDays,
	externalLinks,
};
