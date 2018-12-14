import React from 'react';
import ReactDOM from 'react-dom';
import { RouteProvider, Route } from 'react-router5';
import createRouter from 'router5';
import browserPlugin from 'router5/plugins/browser';
import routes from './config/routes';
import PageRenderer from './components/PageRenderer';
import NavBar from './components/Navbar';

import './main.less';


const router = createRouter(routes).usePlugin(browserPlugin({ useHash: true }));

router.start(() => {
  ReactDOM.render(
    <RouteProvider router={router}>
      <NavBar menuItems={routes} />
      <Route>{({ route }) => <PageRenderer route={route} />}</Route>
    </RouteProvider>,
    document.getElementById('main'),
  );
});
