import * as React from 'react';
import { Link } from 'react-router-dom';

const AuthenticatedView = ({ piral }) => {
  return (
    <React.Suspense fallback="Loading...">
      <piral.Extension name="account-details" />
      <br />
      <piral.Extension name="payment-details" />
    </React.Suspense>
  );
};

const NotAuthenticated = () => <p>You are not authenticated.</p>;

const MyAccount = ({ piral }) => {
  const token = window.sessionStorage.getItem('token');
  let view;

  if (token) {
    view = <AuthenticatedView piral={piral} />;
  } else {
    view = <piral.Extension name="request-login" empty={NotAuthenticated} />;
  }

  return (
    <div>
      <h1>My Account</h1>
      {view}
    </div>
  );
};

export default MyAccount;
