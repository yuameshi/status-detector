import { Box } from '@mui/material';
import type { FC, PropsWithChildren } from 'react';
import { AppHeader } from './Header';
// import { AppFooter } from './Footer';

export const Layout: FC<PropsWithChildren> = ({ children }) => (
	<Box
		sx={{
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100vh',
		}}
	>
		<AppHeader />
		<Box
			sx={{
				paddingTop: '24px',
				maxWidth: 'none !important',
				minWidth: '300px',
				flex: '1 0 auto',
			}}
		>
			{children}
		</Box>
		{/* <AppFooter /> */}
	</Box>
);
