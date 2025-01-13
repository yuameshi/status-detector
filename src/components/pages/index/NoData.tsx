import { Typography } from '@mui/material';
import { useTranslations } from 'next-intl';

export const NoData = () => {
	const t = useTranslations('index');
	return <Typography textAlign='center' variant='h3'>{t('nothing')}</Typography>;
};
