export const runtime = 'edge';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { CssBaseline } from '@mui/material';
import { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@constants/theme';

import Favicon from '~/public/favicon.png';
import { ThemeContext } from '@components/utils/ThemeContext';
import { ScrollBarCss } from '@components/utils/ScrollBarCss';
import { Layout } from '@components/layout';

const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto',
});

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const params = await props.params;

	const { locale } = params;

	const t = await getTranslations({ locale, namespace: 'common' });

	return {
		title: t('metadata.title'),
		description: t('metadata.description'),
		authors: [{ name: 'yuameshi' }],
		icons: [
			{
				url: Favicon.src,
				sizes: `${Favicon.height}x${Favicon.width}`,
			},
		],
	};
}

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
};

export default async function RootLayout(
	props: Readonly<{
		children: React.ReactNode;
		params: { locale: string };
	}>,
) {
	const params = await props.params;

	const { locale } = params;

	const { children } = props;

	// Ensure that the incoming `locale` is valid
	if (!routing.locales.includes(locale as any)) {
		notFound();
	}

	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	return (
		<html
			className={roboto.variable}
			lang={locale}
		>
			<body>
				<AppRouterCacheProvider options={{ key: 'css' }}>
					<ThemeContext>
						<ScrollBarCss />
						<CssBaseline />
						<NextIntlClientProvider messages={messages}>
							<Layout>{children}</Layout>
						</NextIntlClientProvider>
					</ThemeContext>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
