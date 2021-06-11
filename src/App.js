import React from 'react';
import Nav from './components/Nav';
import { ProtectedRoute } from './components/protectedRoute';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from './store/store';
import { Provider } from 'react-redux';
import routes from './components/routesConfig';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()


function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
          <Switch>
            {
              routes.map((route) => (
                route.protected ?
                  <ProtectedRoute path={route.pathname} component={route.component} exact={route.exact} />
                  : <Route path={route.pathname} component={route.component} exact={route.exact} />
              )
              )
            }
          </Switch>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>

  );
}

export default App;
