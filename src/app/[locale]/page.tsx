import { Box } from '@mui/material';
import { apiKeys, maxDays, showLinks } from '@constants/config';
import { MonitorCard } from '@components/pages/index/MonitorCard';
import { CounterContextProvider } from '@components/pages/index/CounterContext';
import { Alert } from '@components/pages/index/Alert/Alert';

const Home = () => (
	<CounterContextProvider>
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
	</CounterContextProvider>
);

export default Home;
