import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from '@modules/layout/containers/Layout';
import CustomSwitch from './modules/common/components/CustomSwitch';
import MainPage from '@modules/pages/mainPage';

const modulesData = [{ path: '/', title: 'mainPage', component: MainPage }];
const isBrowserSupportsHistory = 'pushState' in window.history;
const queryClient = new QueryClient();
const NoFound = () => <Redirect to="/404" />;

const App = () => {
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
