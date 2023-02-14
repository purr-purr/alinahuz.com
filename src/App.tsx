import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import CustomSwitch from '@modules/layout/components/CustomSwitch';
import Layout from '@modules/layout/components/Layout';
import Home from '@modules/pages/home/components/HomeLayout';

const isBrowserSupportsHistory = 'pushState' in window.history;
const queryClient = new QueryClient();
const NoFound = () => <Redirect to="/404" />;

const App = () => {
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
