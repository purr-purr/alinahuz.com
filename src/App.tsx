import ReactGA from 'react-ga';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from '@modules/layout/containers/Layout';
import CustomSwitch from './modules/common/components/CustomSwitch';
import MainPage from '@modules/pages/mainPage';
import { useEffect } from 'react';

const modulesData = [{ path: '/', title: 'mainPage', component: MainPage }];
const isBrowserSupportsHistory = 'pushState' in window.history;
const queryClient = new QueryClient();
const NoFound = () => <Redirect to="/404" />;

const App = () => {
  const TRACKING_ID = 'G-L38R9BZTP9';
  ReactGA.initialize(TRACKING_ID);
  console.log('init', TRACKING_ID);

  useEffect(() => {
    const currentLocation = window.location.pathname + window.location.search;
    const location = currentLocation === '/' ? 'home' : currentLocation;
    ReactGA.pageview(location);
  }, []);

  return (
    <BrowserRouter forceRefresh={!isBrowserSupportsHistory}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <CustomSwitch>
            {modulesData.map(({ path, title, component }) => (
              <Route exact key={title} path={path} component={component} />
            ))}
            <Route component={NoFound} key="pageNotFound" />
          </CustomSwitch>
        </Layout>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
