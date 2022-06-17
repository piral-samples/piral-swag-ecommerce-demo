import * as React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <p>
    Please <Link to="/">sign in</Link> before accessing this section
  </p>
);
