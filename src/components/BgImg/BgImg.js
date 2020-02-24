import React from 'react';
import classes from './BgImg.module.css';
import imgSrc from '../../assets/IMG_0536.jpg';

const bgImg = () => {
  return (
    <div className={classes.Background}>
      <img src={imgSrc} className={classes.img} alt='background' />
    </div>
  )
}

export default bgImg;