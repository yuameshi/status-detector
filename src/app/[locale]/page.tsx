import { Box } from '@mui/material';
import { apiKeys } from '@constants/config';
import { MonitorCard } from '@components/pages/index/MonitorCard';
import { CounterContextProvider } from '@components/pages/index/CounterContext';
import { Alert } from '@components/pages/index/Alert/index';

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
				<Alert />
				{apiKeys.map((_, i) => (
					<MonitorCard
						key={i}
						token={apiKeys[i]}
					/>
				))}
			</Box>
		</Box>
	</CounterContextProvider>
);

export default Home;
