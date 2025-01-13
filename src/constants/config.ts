export const apiKeys: string[] =
	process.env.API_KEYS?.split(',')
		.map(key => key.trim())
		.filter(key => key !== '') || [];

export const showLinks: boolean = process.env.SHOW_LINKS === 'true';

export const maxDays: number = Number(process.env.MAX_DAYS) || 60;

export const externalLinks: ExternalLink[] =
	process.env.EXTERNAL_LINKS?.split('_')
		.map(link => link.trim())
		.filter(link => link !== '')
		.map(link => ({
			name: link.split('|')[0],
			url: link.split('|')[1],
		})) || [];

export const config = {
	apiKeys,
	showLinks,
	maxDays,
	externalLinks,
};
