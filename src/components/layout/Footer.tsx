import { Typography, Box, Divider } from '@mui/material';

export const AppFooter: React.FC = () => {
	return (
		<>
			<Divider />
			<Box
				sx={{
					display: 'flex',
					color: 'text.main',
					padding: '25px',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Typography
					variant='body1'
					align='center'
				>
					{new Date().getFullYear().toString()}
				</Typography>
			</Box>
		</>
	);
};
