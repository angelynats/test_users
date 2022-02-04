import React from 'react';
import Loader from 'react-loader-spinner';
import classes from './Loader.module.css';

const LoaderDots = ({ size }) => (
  <Loader
    type="ThreeDots"
    color="rgba(0, 39, 76, 0.6)"
    height={size || 80}
    width={size || 80}
    timeout={30000}
    className={classes.loaderDots}
  />
);

export default LoaderDots;
