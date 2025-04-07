import { AppBar, Toolbar, Grid, Button, Box } from '@mui/material';
import { DarkmodeToggle } from '@components/layout/Header/DarkmodeToggle';
import { LanguageMenu } from '@components/layout/Header/LanguageMenu';
import { externalLinks } from '@constants/config';
import { Title } from '@components/layout/Header/Title';
import StorageIcon from '@mui/icons-material/Storage';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export const AppHeader = () => {
	return (
		<AppBar position='sticky'>
			<Toolbar>
				<StorageIcon sx={{ m: 2 }} />
				<Grid
					container
					sx={{
						display: 'flex',
						width: '100%',
						justifyContent: 'space-between',
					}}
				>
					<Grid
						size='auto'
						display='flex'
						alignItems='center'
						sx={{
							maxWidth: '100%',
							flexWrap: 'wrap',
						}}
					>
						<Title />
						<Box>
							{externalLinks.map(({ url, name }, i) => (
								<Button
									key={i}
									href={url}
									target='_blank'
									rel='noopener noreferrer'
									sx={{ my: 2, color: 'inherit' }}
									endIcon={<OpenInNewIcon />}
								>
									{name}
								</Button>
							))}
						</Box>
					</Grid>
					<Grid
						size='auto'
						display='flex'
						alignItems='center'
						py={1}
					>
						<LanguageMenu />
						<DarkmodeToggle />
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};
