import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Timer.module.css';
import db from '../../middleware/firebase';

const Timer = (props) => {
  const { id } = useParams();

  const [time, setTime] = useState({
    day: 0,
    hour: 0,
    min: 0,
    sec: 0,
  });

  const [ts, setTs] = useState(0);

  useEffect(() => {
    db.ref(`/list/${id}`).once('value', e => {
      const data = e.val();
      setTs(data.ts);
    });
  }, [id]);


  useEffect(() => {
    if (ts !== 0) {
      const now = new Date();
      const left_ts = ts - now.getTime();
      // 每秒更新
      const t = setTimeout(() => {
        setTime({
          day: parseInt(left_ts / (60 * 60 * 24 * 1000)),
          hour: parseInt(left_ts / (60 * 60 * 1000) % 24),
          min: parseInt(left_ts / (60 * 1000) % 60),
          sec: parseInt(left_ts / 1000 % 60),
        })
      }, 1000);

      return () => {
        // 被update時取消timer
        clearTimeout(t);
      }
    }
  })

  return (
    <div className={classes.Timer}>
      <p className={classes.text}>{time.day} days</p>
      <p className={classes.text}>{time.hour} hours</p>
      <p className={classes.text}>{time.min} minutes</p>
      <p className={classes.text}>{time.sec} seconds</p>
    </div>
  );
}

export default Timer;