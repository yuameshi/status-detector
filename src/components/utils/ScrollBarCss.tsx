'use client';

import { useColorScheme, useTheme } from '@mui/material';
import Color from 'color';

export function ScrollBarCss() {
	const theme = useTheme();
	const colorScheme = useColorScheme();
	const mode = (colorScheme.mode === 'system' ? (colorScheme.systemMode === 'dark' ? 'dark' : 'light') : colorScheme.mode) || 'light';

	return (
		<style
			jsx
			global
		>{`
			html {
				scrollbar-color: ${mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light} transparent;
				scrollbar-width: 10px;
			}
			/* 滚动条整体宽度 */
			::-webkit-scrollbar {
				width: 10px;
			}
			/* 滚动条滑槽样式 */
			::-webkit-scrollbar-track {
				border-radius: 0;
			}
			/* 滚动条样式 */
			::-webkit-scrollbar-thumb {
				background: ${Color(mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light)
					.alpha(0.7)
					.string()};
				opacity: 0.7;
			}
			::-webkit-scrollbar-thumb:hover {
				background: ${Color(mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light)
					.alpha(0.8)
					.string()};
			}
			::-webkit-scrollbar-thumb:active {
				background: ${Color(mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light)
					.alpha(1)
					.string()};
			}
			/* 浏览器失焦的样式 */
			::-webkit-scrollbar-thumb:window-inactive {
				background: rgba(0, 0, 0, 0.4);
			}
		`}</style>
	);
}
