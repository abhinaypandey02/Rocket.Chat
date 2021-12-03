import React, { FC, lazy, Suspense } from 'react';
import { QueryClientProvider } from 'react-query';

import { queryClient } from '../../lib/queryClient';
import E2EEProvider from '../e2ee/E2EEProvider';
import PageLoading from './PageLoading';

const ConnectionStatusBar = lazy(
	() => import('../../components/connectionStatus/ConnectionStatusBar'),
);
const MeteorProvider = lazy(() => import('../../providers/MeteorProvider'));
const BannerRegion = lazy(() => import('../banners/BannerRegion'));
const AppLayout = lazy(() => import('./AppLayout'));
const PortalsWrapper = lazy(() => import('./PortalsWrapper'));

const AppRoot: FC = () => (
	<Suspense fallback={<PageLoading />}>
		<MeteorProvider>
			<QueryClientProvider client={queryClient}>
				<E2EEProvider>
					<ConnectionStatusBar />
					<BannerRegion />
					<AppLayout />
					<PortalsWrapper />
				</E2EEProvider>
			</QueryClientProvider>
		</MeteorProvider>
	</Suspense>
);

export default AppRoot;
