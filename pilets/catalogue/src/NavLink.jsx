import * as React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ViewListIcon from '@material-ui/icons/ViewList';

export default () => (
  <ListItem button key="Catalogue">
    <ListItemIcon>
      <ViewListIcon />
    </ListItemIcon>
    <Link to="/shop">
      <ListItemText primary="Catalogue" />
    </Link>
  </ListItem>
);
