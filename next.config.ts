/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	poweredByHeader: false,
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default withNextIntl(nextConfig);
