import { AppBar, Box, Toolbar, Typography, Grid2, Button } from '@mui/material';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import { DarkmodeToggle } from '@components/layout/Header/DarkmodeToggle';
import { LanguageMenu } from '@components/layout/Header/LanguageMenu';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { externalLinks } from '@constants/config';
import { Title } from '@components/layout/Header/Title';

export const AppHeader = () => {
	return (
		<AppBar position='sticky'>
			<Toolbar>
				<QueryStatsIcon sx={{ m: 2 }} />
				<Grid2
					container
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
					}}
				>
					<Grid2
						size={{
							xs: 12,
							lg: 'auto',
						}}
					>
						<Title />
					</Grid2>
					<Grid2>
						<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
							{externalLinks.map(({ url, name }, i) => (
								<Button
									key={i}
									href={url}
									target='_blank'
									rel='noopener noreferrer'
									sx={{ my: 2, color: 'white' }}
									endIcon={<OpenInNewIcon />}
								>
									{name}
								</Button>
							))}
						</Box>
					</Grid2>
					<Grid2
						size={{
							xs: 0,
							lg: 'grow',
						}}
					>
						<Box sx={{ flexGrow: 1 }} />
					</Grid2>
					<Grid2
						size={{
							xs: 12,
							lg: 'auto',
						}}
					>
						<Box>
							<LanguageMenu />
							<DarkmodeToggle />
						</Box>
					</Grid2>
				</Grid2>
			</Toolbar>
		</AppBar>
	);
};
