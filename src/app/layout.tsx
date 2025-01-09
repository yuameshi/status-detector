import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import { Metadata, Viewport } from 'next';

import Favicon from '@assets/favicon.ico';
import { EmotionCache } from '@components/utils/EmotionCache';
import { ThemeContext } from '@components/utils/ThemeContext';
import { ScrollBarCss } from '@components/utils/ScrollBarCss';
import { Layout } from '@components/layout';

export function generateMetadata(): Metadata {
	return {
		title: '服务可用性检测',
		description: '查看有关服务的当前状态和过去一段时间的可用性',
		authors: [{ name: 'yuameshi' }],
		// icons: [
		// 	{
		// 		url: Favicon.src,
		// 		sizes: `${Favicon.height}x${Favicon.width}`,
		// 	},
		// ],
	};
}

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html>
			<ThemeContext>
				<EmotionCache>
					<ScrollBarCss />
					<CssBaseline />
					<body>
						<Layout>{children}</Layout>
					</body>
				</EmotionCache>
			</ThemeContext>
		</html>
	);
}
