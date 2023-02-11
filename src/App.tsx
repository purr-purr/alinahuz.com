import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import CustomSwitch from '@modules/layout/components/CustomSwitch';
import Layout from '@modules/layout/components/Layout';
import Home from '@modules/pages/home/components/HomeLayout';

import { GA_TRACKING_ID } from '@utils/const';
import * as gtag from '@utils/gtag';

const isBrowserSupportsHistory = 'pushState' in window.history;
const queryClient = new QueryClient();
const NoFound = () => <Redirect to="/404" />;

const App = () => {
	const isProduction = process.env.NODE_ENV === 'production';

	useEffect(() => {
		isProduction && gtag.pageview('home');
	}, []);

	return (
		<>
			{isProduction && (
				<Helmet>
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
                                    window.dataLayer = window.dataLayer || [];
                                    function gtag(){dataLayer.push(arguments);}
                                    gtag('js', new Date());
                                    gtag('config', '${GA_TRACKING_ID}', {
                                      page_path: window.location.pathname,
                                    });
                                  `,
						}}
					/>
				</Helmet>
			)}

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
		</>
	);
};

export default App;
