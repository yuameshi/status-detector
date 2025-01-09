'use client';
import { IconButton, MenuItem, Menu } from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';
import TranslateIcon from '@mui/icons-material/Translate';

export function LanguageMenu() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [localeMenuOpen, setLocaleMenuOpen] = useState(false);

	return (
		<>
			<IconButton
				size='large'
				aria-label='switch language'
				aria-controls='menu-locale-list'
				aria-haspopup='true'
				onClick={e => {
					setLocaleMenuOpen(true);
					setAnchorEl(e.currentTarget);
				}}
				color='inherit'
			>
				<TranslateIcon />
			</IconButton>
			<Menu
				id='menu-locale-list'
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				sx={{
					'*': {
						textDecoration: 'none',
						color: 'text.primary',
					},
				}}
				open={localeMenuOpen}
				onClose={() => {
					setLocaleMenuOpen(false);
					setAnchorEl(null);
				}}
			>
				<Link
					locale='zh-CN'
					passHref
					href={''}
				>
					<MenuItem
						onClick={() => {
							setLocaleMenuOpen(false);
							setAnchorEl(null);
						}}
					>
						简体中文
					</MenuItem>
				</Link>
				<Link
					locale='en'
					passHref
					href={''}
				>
					<MenuItem
						onClick={() => {
							setLocaleMenuOpen(false);
							setAnchorEl(null);
						}}
					>
						English
					</MenuItem>
				</Link>
			</Menu>
		</>
	);
}
