import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import CustomSwitch from '@modules/layout/components/CustomSwitch';
import Layout from '@modules/layout/components/Layout';
import Home from '@modules/pages/home/components/HomeLayout';

import { GA_TRACKING_ID } from '@utils/const';

const isBrowserSupportsHistory = 'pushState' in window.history;
const queryClient = new QueryClient();
const NoFound = () => <Redirect to="/404" />;

const App = () => {
	const isProduction = process.env.NODE_ENV === 'production';
	useEffect(() => {
		if (isProduction) {
			ReactGA.initialize(`${GA_TRACKING_ID}`);
			ReactGA.pageview('Init page view');
			console.log('GA init');
		}
	}, []);

	return (
		<BrowserRouter forceRefresh={!isBrowserSupportsHistory}>
			<QueryClientProvider client={queryClient}>
				<Layout>
					<CustomSwitch>
						<Route exact path="/" component={Home} />
						<Route component={NoFound} />
					</CustomSwitch>
				</Layout>
			</QueryClientProvider>
		</BrowserRouter>
	);
};

export default App;
