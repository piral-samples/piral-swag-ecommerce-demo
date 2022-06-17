import * as React from 'react';
import NavLink from './NavLink';

const SignIn = React.lazy(() => import('./SignIn'));
const RequestLogin = React.lazy(() => import('./RequestLogin'));

export function setup(app) {
  app.registerPage('/', SignIn);

  app.registerExtension('nav-items', NavLink);

  app.registerExtension('request-login', RequestLogin);
}
