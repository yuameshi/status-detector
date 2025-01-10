'use client';

import { IconButton, MenuItem, Menu } from '@mui/material';
import { useState, useTransition } from 'react';
import { usePathname, useRouter } from '@/i18n/routing';
import TranslateIcon from '@mui/icons-material/Translate';
import { useParams } from 'next/navigation';

export function LanguageMenu() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [localeMenuOpen, setLocaleMenuOpen] = useState(false);

	const router = useRouter();
	const [_isPending, startTransition] = useTransition();
	const pathname = usePathname();
	const params = useParams();

	function handleChangeLocale(nextLocale: string) {
		startTransition(() => {
			router.replace(
				// @ts-expect-error -- TypeScript will validate that only known `params`
				// are used in combination with a given `pathname`. Since the two will
				// always match for the current route, we can skip runtime checks.
				{ pathname, params },
				{ locale: nextLocale },
			);
		});
	}

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
				<MenuItem
					onClick={() => {
						setLocaleMenuOpen(false);
						setAnchorEl(null);
						handleChangeLocale('zh-CN');
					}}
				>
					简体中文
				</MenuItem>
				<MenuItem
					onClick={() => {
						setLocaleMenuOpen(false);
						setAnchorEl(null);
						handleChangeLocale('en');
					}}
				>
					English
				</MenuItem>
			</Menu>
		</>
	);
}
