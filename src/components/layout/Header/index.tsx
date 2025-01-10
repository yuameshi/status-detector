import { AppBar, Toolbar, Grid2, Button } from '@mui/material';
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
				<Grid2
					container
					sx={{
						display: 'flex',
						width: '100%',
						justifyContent: 'space-between',
					}}
				>
					<Grid2
						size='auto'
						display='flex'
						alignItems='center'
					>
						<Title />
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
					</Grid2>
					<Grid2
						size='auto'
						display='flex'
						alignItems='center'
					>
						<LanguageMenu />
						<DarkmodeToggle />
					</Grid2>
				</Grid2>
			</Toolbar>
		</AppBar>
	);
};
