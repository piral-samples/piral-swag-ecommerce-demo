import * as React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default () => (
  <ListItem button key="SignIn">
    <ListItemIcon>
      <ExitToAppIcon />
    </ListItemIcon>
    <Link to="/">
      <ListItemText primary="Sign In" />
    </Link>
  </ListItem>
);
