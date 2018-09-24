import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AclRouter from 'react-acl-router';

import Clients from './components/clients'
import ClientsEdit from './components/clientsEdit'
import CreateClients from './components/createClients'
import Upload from './components/upload'
import Unauthorized from './components/unauthorized'

const normalRoutes = [{
  path: '/',
  exact: true,
  redirect: '/clients'
}, {
  path: '/clients',
  exact: true,
  component: Clients
}]

const authorizedRoutes = [{
  path: '/clients/edit',
  exact: true,
  permissions: ['admin'],
  component: ClientsEdit,
  unauthorized: Unauthorized
}, {
  path: '/clients/new',
  exact: true,
  permissions: ['admin', 'user'],
  component: CreateClients,
  unauthorized: Unauthorized
}, {
  path: '/upload',
  exact: true,
  permissions: ['admin'],
  component: Upload,
  unauthorized: Unauthorized
}]

const App = () => (
  <BrowserRouter basename='/'>
    <AclRouter
      authorities={['admin']}
      authorizedRoutes={authorizedRoutes}
      normalRoutes={normalRoutes}
      notFound={() => <div>Page Not Found</div>}
    />
  </BrowserRouter>
);

export default App;
