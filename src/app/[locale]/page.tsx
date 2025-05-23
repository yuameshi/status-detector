import { Box } from '@mui/material';
import dynamic from 'next/dynamic';
import { apiKeys, maxDays, showLinks } from '@constants/config';
import { MonitorCard } from '@components/pages/index/MonitorCard';
import { OperationalCounterContextProvider } from '@components/pages/index/OperationalCounterContext';
const Alert = dynamic(() => import('@components/pages/index/Alert/Alert').then(el => el.Alert));
// import { Alert } from '@components/pages/index/Alert/Alert';
import { LoadingAlert } from '@components/pages/index/Alert/LoadingAlert';
import { LoadedCounterContextProvider } from '@components/pages/index/LoadedCounterContext';
import { NoData } from '@components/pages/index/NoData';
import { LoadFailedCounterContextProvider } from '@components/pages/index/LoadFailedCounterContext';
const LoadFailedAlert = dynamic(() => import('@components/pages/index/Alert/LoadFailedAlert').then(el => el.LoadFailedAlert));
// import { LoadFailedAlert } from '@components/pages/index/Alert/LoadFailedAlert';

const Home = () => (
	<Box
		sx={{
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		}}
	>
		{apiKeys.length > 0 ? (
			<LoadedCounterContextProvider>
				<OperationalCounterContextProvider>
					<LoadFailedCounterContextProvider>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								px: 3,
								width: '100%',
								maxWidth: 1000,
								alignItems: 'center',
								// justifyContent: 'center',
								// height: '100vh',
							}}
						>
							<Alert keysLength={apiKeys.length} />
							<LoadingAlert keysLength={apiKeys.length} />
							<LoadFailedAlert />
							{apiKeys.map((_, i) => (
								<MonitorCard
									key={i}
									showLinks={showLinks}
									maxDays={maxDays}
									token={apiKeys[i]}
								/>
							))}
						</Box>
					</LoadFailedCounterContextProvider>
				</OperationalCounterContextProvider>
			</LoadedCounterContextProvider>
		) : (
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					px: 3,
					width: '100%',
					maxWidth: 1000,
					alignItems: 'center',
					justifyContent: 'center',
					height: '70vh',
				}}
			>
				<NoData />
			</Box>
		)}
	</Box>
);

export default Home;
