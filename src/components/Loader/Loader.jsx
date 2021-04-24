import React from 'react';
import Loader from 'react-loader-spinner';
import style from './Loader.module.scss';

const LoaderSpinner = () => {
  return (
    <Loader
      className={style.LoaderSpinner}
      type="TailSpin"
      color="#00BFFF"
      height={50}
      width={50}
      timeout={2000}
    />
  );
};
export default LoaderSpinner;
