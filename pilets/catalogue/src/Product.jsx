import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Paper, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles(() => ({
  paper: {
    margin: 10,
    float: 'left',
    padding: 8,
    textAlign: 'center',
    width: 330,
    height: 350,
  },
}));

const Product = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const productDetails = () => {
    history.push(props.url);
  };

  return (
    <Paper elevation={3} className={classes.paper}>
      <img src={props.data.image} width="300" />
      <div>
        <h2>{props.data.productName}</h2>
        <span>{props.data.cost}</span>
        <IconButton onClick={productDetails}>
          <InfoIcon />
        </IconButton>
      </div>
    </Paper>
  );
};

export default Product;
