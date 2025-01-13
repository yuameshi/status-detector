import { Box } from '@mui/material';
import { apiKeys, maxDays, showLinks } from '@constants/config';
import { MonitorCard } from '@components/pages/index/MonitorCard';
import { OperationalCounterContextProvider } from '@components/pages/index/OperationalCounterContext';
import { Alert } from '@components/pages/index/Alert/Alert';
import { LoadingAlert } from '@components/pages/index/Alert/LoadingAlert';
import { LoadedCounterContextProvider } from '@components/pages/index/LoadedCounterContext';

const Home = () => (
	<LoadedCounterContextProvider>
		<OperationalCounterContextProvider>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
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
					{apiKeys.map((_, i) => (
						<MonitorCard
							key={i}
							showLinks={showLinks}
							maxDays={maxDays}
							token={apiKeys[i]}
						/>
					))}
				</Box>
			</Box>
		</OperationalCounterContextProvider>
	</LoadedCounterContextProvider>
);

export default Home;
