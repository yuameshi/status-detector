import { Box } from '@mui/material';
import type { FC, PropsWithChildren } from 'react';
import { AppHeader } from './Header';
import { RefreshProvider } from '@components/utils/RefreshProvider';
import { refreshInterval } from '@constants/config';
// import { AppFooter } from './Footer';

export const Layout: FC<PropsWithChildren> = ({ children }) => (
	<Box
		sx={{
			display: 'flex',
			flexDirection: 'column',
			minHeight: '100vh',
		}}
	>
		<RefreshProvider refreshInterval={refreshInterval}>
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
		</RefreshProvider>
		{/* <AppFooter /> */}
	</Box>
);
