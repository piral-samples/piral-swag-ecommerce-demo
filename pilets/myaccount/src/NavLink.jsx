import * as React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default () => (
  <ListItem button key="My Account">
    <ListItemIcon>
      <AccountCircleIcon />
    </ListItemIcon>
    <Link to="/myaccount">
      <ListItemText primary="My Account" />
    </Link>
  </ListItem>
);
