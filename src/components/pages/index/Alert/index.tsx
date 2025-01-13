import { apiKeys } from '@constants/config';
import { Alert as AlertChildren } from './Alert';

export const Alert = () => <AlertChildren keysLength={apiKeys.length}></AlertChildren>;
