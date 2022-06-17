import * as React from 'react';
import { Button, TextField } from '@material-ui/core';

export default () => {
  const [theToken, setToken] = React.useState('');
  const onRetrieveToken = () => setToken(window.sessionStorage.getItem('token'));

  return (
    <>
      <Button variant="contained" onClick={onRetrieveToken}>
        Get Token
      </Button>
      <TextField
        id="standard-read-only-input"
        label="Read Only"
        value={theToken}
        InputProps={{
          readOnly: true,
        }}
      />
    </>
  );
};
